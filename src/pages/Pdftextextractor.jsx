import React , {useState} from 'react'

const Pdftextextractor = () => {
    const [text, setText] = useState('');
  const [loading , setLoading] = useState(false)


  const handleFileChange = async (e) => {
      const file = e.target.files[0];
      setLoading(true)
      if (file) {
        const fileReader = new FileReader();
        fileReader.onload = async () => {
          const arrayBuffer = fileReader.result;
          const pdfData = new Uint8Array(arrayBuffer);
          
            


                        const pdfDocument = await pdfjsLib.getDocument(pdfData).promise; 
                 
            
                    const numPages = pdfDocument.numPages;
                    let fullText = '';
                 
    
          

          for (let pageNum = 1; pageNum <= numPages; pageNum++) {
            const pdfPage = await pdfDocument.getPage(pageNum);
            const textContent = await pdfPage.getTextContent();
            const pageText = textContent.items.map(item => item.str).join(' ');
            fullText += pageText + ' ';
          }
          
          setText(fullText);
          setTimeout(()=>{

            setLoading(false)
          },3000)
        };
        fileReader.readAsArrayBuffer(file);
      }
    };


    const downloadTxt = ()=>{
      const element = document.createElement("a");
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "myTextFile.txt";
    document.body.appendChild(element);
    element.click();
    }

const downloadCSV = ()=>{
  const element = document.createElement("a");
  const file = new Blob([text], { type: 'text/plain' });
  element.href = URL.createObjectURL(file);
  element.download = "myCSVfile.csv";
  document.body.appendChild(element);
  element.click();
}


if(loading){
  return <div className='w-full h-screen flex justify-center items-center' > <div class="loader"></div> </div>
}

  return (
    <div className='w-full  h-screen ' >

<div className='w-full h-screen flex flex-col gap-4 justify-center items-center'>
    <h1 className='text-4xl font-semibold  text-red-500'>PDF Text Extraction</h1>
    <div className='flex gap-3' >
      <input className='bg-red-500 px-4 py-2 rounded-2xl shadow-md text-white' type="file" accept=".pdf" onChange={handleFileChange} />
      {
        text && (
            <>
<button className='bg-green-500 px-4 py-2 rounded-2xl shadow-md text-white' onClick={downloadTxt} >Download in .txt file</button>     
<button className='bg-green-500 px-4 py-2 rounded-2xl shadow-md text-white' onClick={downloadCSV} >Download in .csv file</button>     
            
            </>

        )
      }

    </div>
      <div className='px-[80px]'>
        <h2 className='text-2xl text-red-500 font-semibold'>Extracted Text:</h2>
        <p>{text}</p>
      </div>
</div>
    </div>
  )
}

export default Pdftextextractor