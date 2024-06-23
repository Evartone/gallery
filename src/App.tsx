import { useEffect, useState, FormEvent, FC } from 'react';
import * as C from './App.styles'; 
import * as Photos from './services/photos'; 
import { Photo } from './types/photos';
import { PhotoItem } from "./components/photoItem"; 

const App =()=> {

   const [loading, setLoading]= useState(false); 
   const [photos, setPhotos] = useState<Photo[]>([]); 
   const [uploading, setUploading] = useState(false); 

   useEffect(()=> {

      const getphotos = async()=> {

         setLoading(true);
         setPhotos(await Photos.getAll()) 
         setLoading(false)
      }

       getphotos(); 

   }, []);
 
   const handleFormSubmit = async (e: FormEvent<HTMLFormElement>)=> {

      e.preventDefault(); 

      const formData = new FormData(e.currentTarget); 
      const file = formData.get("image") as File; 

      if(file &&  file.size > 0) {

         setUploading(true); // if i have the file 

         let result = await Photos.insert(file)

         setUploading(false); 

         if (result instanceof Error ) {

            alert(`${result.name} - ${result.message}`); 
         }else {
            let newphotoList = [...photos]
            newphotoList.push(result); 
            setPhotos(newphotoList); 
         }

      }

   }

   return (

      <C.Container>

         <C.Area>

            <C.Header> Smart Gallery</C.Header>

           <C.UploadForm method="POST" onSubmit={handleFormSubmit}>

             <input type="file" name="image" />
             <input type="submit" value="Send"/>


             {uploading && "sending..."}

           </C.UploadForm>

             {loading && 
             
             <C.Screenalert>

               <div className='emoji'>hey</div>
               <div>Loading...</div>

             </C.Screenalert>

             }        
            
             { !loading && photos.length > 0 &&
             
               <C.Photolist>

               {photos.map((item, index)=> (

                  <PhotoItem key={index} url={item.url}  name={item.name}/>

               ))}
               
               </C.Photolist>

             }

             { !loading && photos.length === 0 &&

              <C.Screenalert>

               <div className='emoji'>hey</div>
               <div>No foto!</div>

              </C.Screenalert>
             }

         </C.Area>

         
      </C.Container>
   )
}

export default App; 
