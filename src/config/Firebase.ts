// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore,  collection, getDocs, deleteDoc, doc, addDoc } from 'firebase/firestore';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAS2_jdB9KFucNLkxqWjioTsubacm-QcDY',
  authDomain: 'manadong-website.firebaseapp.com',
  projectId: 'manadong-website',
  storageBucket: 'manadong-website.appspot.com',
  messagingSenderId: '1000928730378',
  appId: '1:1000928730378:web:675a9b4c7049801ff6aef3',
  measurementId: 'G-MSTEHM6ZN5'
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

{/* 
=========================Collect Documet to JSON=============================================

const exportCollectionToJson = async (collectionName: string) => {
  try {
    const collectionRef = collection(db, collectionName);
    const querySnapshot = await getDocs(collectionRef);

    const jsonData: any[] = [];
    querySnapshot.forEach((doc) => {
      jsonData.push(doc.data());
    });

    const jsonString = JSON.stringify(jsonData, null, 2);
    // console.log(jsonString);
  } catch (error) {
    console.error('Error exporting collection to JSON:', error);
  }
};

exportCollectionToJson('Menu');
 */}



{/*========================Delete Document collection=================================  */}
{/*const handleDeleteDocument = async (collectionName:string, documentId:string) => {
  try {
    const documentRef = doc(db, collectionName, documentId);
    await deleteDoc(documentRef);
    // console.log('Document successfully deleted!');
  } catch (error) {
    console.error('Error deleting document:', error);
  }
};

handleDeleteDocument('Menu', 'RhYG5GAsRQehwEeI2311');*/}



{/* 
===========================Added From Firebase Storage to Firestore=====================================================
const fetchImagesFromPathAndSaveToFirestore = async (path : string) => {
  try {
    // Mendapatkan instance storage dari Firebase SDK
    const storage = getStorage()
    const storageRef = ref(storage, path)

    // Mengambil daftar file dari direktori storageRef
    const files = await listAll(storageRef)

    // Iterasi melalui setiap file
    for (const fileRef of files.items) {
      // Mendapatkan URL download untuk setiap file
      const downloadURL = await getDownloadURL(fileRef)

      // Konversi downloadURL menjadi string dan menyimpannya ke Firestore
      const imageUrl = downloadURL.toString()
      await addDoc(collection(db, 'Menu'), {
        url: imageUrl,
      })

      console.log('Image URL saved to Firestore:', imageUrl)
    }

    console.log('All image URLs saved to Firestore successfully.')
  } catch (error) {
    console.log('Error fetching images and saving URLs to Firestore:', error)
    throw error
  }
}

const path = 'gs://manadong-website.appspot.com/Logo'
fetchImagesFromPathAndSaveToFirestore(path)
.then(() => {
  console.log('Image URLs fetched and saved successfully.')
  // Lakukan tindakan atau logika yang diinginkan setelah operasi berhasil.
})
.catch((error) => {
  console.log('Error fetching images and saving URLs:', error)
  // Tangani kesalahan yang terjadi saat mengambil URL gambar atau menyimpan URL ke Firestore.
}) 
 */}

export default firebaseConfig;