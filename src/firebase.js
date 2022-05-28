// 必要な関数を import
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
        apiKey: "AIzaSyCDAFGoSZZAp2pNW4xdP1IBe9xXHifyEws",
        authDomain: "team8-project-8754d.firebaseapp.com",
        projectId: "team8-project-8754d",
        storageBucket: "team8-project-8754d.appspot.com",
        messagingSenderId: "138044295419",
        appId: "1:138044295419:web:682c3d75187c62b724485e",
        measurementId: "G-KYNZGY7DL1"
      };

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)
