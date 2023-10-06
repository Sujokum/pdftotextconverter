import React , {useState } from 'react'


 const PDFimgToText = () => {
  const [ocr, setOcr] = useState("");


  const handleImage = async (e)=>{
      const file = e.target.files[0];
      if(!file)return;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload =  (e)=>{
        const data = e.target.result;  
        let b64 = data.split("base64,")[1];
        fetch('https://script.google.com/macros/s/AKfycbyAhuoNAGvDXcCiyHNPJEP0wW5aUKsDvI-h6G210joZyayNTKyS5csj2qo7Z6Sp0c_dmw/exec' , {
          method : 'POST',
          body : JSON.stringify({
            file: b64,
            type:file.type,
            name : file.name
          })
        }).then(res => res.text()).then(data => {
        console.log(data)
          setOcr(data)  
        })
      
      }
     

  }




  return (
  

    <div className='w-full min-h-screen py-5 flex flex-col gap-4 justify-center items-center'>
        <h1 className='text-4xl font-semibold  text-red-500'>Image / PDF TO TEXT Extraction</h1>
        <div className='flex gap-3' >
          <input className='bg-red-500 px-4 py-2 rounded-2xl shadow-md text-white' onChange={(e)=>handleImage(e)}  type="file"   />
        </div>
          <div className='px-[80px] '>
            <h2 className='text-2xl text-red-500 font-semibold'>Extracted Text:</h2>
            <p>{ocr}</p>
          </div>
    </div>
  
  )
}

export default PDFimgToText