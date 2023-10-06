import React , {useState , useEffect} from 'react'
import { createWorker } from 'tesseract.js'

const PdfImgToText = () => {
    const [ocr, setOcr] = useState("");
    const [imageData, setImageData] = useState(null);

    const convertImageToText = async () => {
  
      if (!imageData) return;


    const worker = await createWorker('eng');
    const response = await worker.recognize(imageData);


      setOcr(response?.data?.text);
    };
  
    useEffect(() => {
      convertImageToText();
    }, [imageData]);


    const handleImage = async (e)=>{
        const file = e.target.files[0];
    if(!file)return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUri = reader.result;
      console.log({ imageDataUri });
      if(imageDataUri){

          setImageData(imageDataUri)
      }
    };
  reader.readAsDataURL(file);
  
    }

    return (
    <div className='w-full  h-screen ' >

    <div className='w-full h-screen flex flex-col gap-4 justify-center items-center'>
        <h1 className='text-4xl font-semibold  text-red-500'>Only Image To Text Extraction</h1>
        <div className='flex gap-3' >
          <input className='bg-red-500 px-4 py-2 rounded-2xl shadow-md text-white' onChange={(e)=>handleImage(e)}  type="file"   />
         
    
        </div>
          <div className='px-[80px]'>
            <h2 className='text-2xl text-red-500 font-semibold'>Extracted Text:</h2>
            <p>{ocr}</p>
          </div>
    </div>
        </div>
  )
}

export default PdfImgToText