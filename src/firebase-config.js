import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAC4UQvzYEm1o4JJ4Vrkkphcd-ZGEZUws",
  authDomain: "e-commerce-app-7f7b1.firebaseapp.com",
  projectId: "e-commerce-app-7f7b1",
  storageBucket: "e-commerce-app-7f7b1.appspot.com",
  messagingSenderId: "408707687837",
  appId: "1:408707687837:web:e4c39689aa17e5ad837b74",
  measurementId: "G-FFB72C8JJL",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
