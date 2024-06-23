import { Photo } from "../types/photos";
import { storage } from "../libs/firebase";
import { ref, listAll, getDownloadURL, uploadBytes} from "firebase/storage";
import { v4 as createId } from "uuid"; 

export const getAll = async () => {

    let list: Photo[]=[]; 

    const imagesfolder = ref(storage, "my images"); 
    const photolist = await listAll(imagesfolder);  

    for (let i in photolist.items) {

        let photoUrl = await getDownloadURL(photolist.items[i]); 

        list.push({

            name:photolist.items[i].name,
            url:photoUrl

        }); 
    }

    return list;

}

export const insert = async(file:File) => {

    // formt of image allowed

    if(["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {


        let randomName = createId(); 
        let newFile = ref(storage, `my images/${randomName}`); //reference of my new file // process of the upload 

        let upload = await uploadBytes(newFile, file); 
        let photoUrl = await getDownloadURL(upload.ref)


        return {
            name: upload.ref.name, 
            url: photoUrl 
        }as Photo; 

    } else {

         return new Error("Arquivo não suportado!!")
    }

}