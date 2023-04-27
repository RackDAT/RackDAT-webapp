import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

export function uploadPhoto(file: File) {
  const firebaseConfig = {
    apiKey: "AIzaSyBJyyRJj6qTE7YX8I8qxpxcwUcfAb_IjL0",
    authDomain: "rackdat-b06a8.firebaseapp.com",
    projectId: "rackdat-b06a8",
    storageBucket: "rackdat-b06a8.appspot.com",
    messagingSenderId: "680735749611",
    appId: "1:680735749611:web:084850fa975d8f1e9a55ae",
    measurementId: "G-EWWG3G3JW8",
  };

  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  const storageRef = ref(storage, "Laboratorios/");
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
}
