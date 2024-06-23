import {initializeApp} from "firebase/app"; 
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    
    apiKey:"AIzaSyAPFeOgeAI8ocE-Rj_K8K4qP2q50DKw3Lo",
    authDomain:"galleryreact-e8054.firebaseapp.com ",
    projectId: "galleryreact-e8054",
    storageBucket:"galleryreact-e8054.appspot.com",
    messagingSenderId:"953996088505",
    appId:"1:953996088505:web:70496aecb6198086493768",
    measurementId:"G-7EGQS1Z8SR", 

  };

  const firebaseApp = initializeApp(firebaseConfig); 
  export const storage = getStorage(firebaseApp); 