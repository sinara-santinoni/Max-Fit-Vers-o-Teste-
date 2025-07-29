// js/login.js

// Firebase CDN (v9.6.1)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Configuração Firebase do seu projeto
const firebaseConfig = {
  apiKey: "AIzaSyA0OZNiMCVqXJ2TWYwY_mF1dytgnZLdLIk",
  authDomain: "max-fit-24c41.firebaseapp.com",
  projectId: "max-fit-24c41",
  storageBucket: "max-fit-24c41.appspot.com",
  messagingSenderId: "721739399756",
  appId: "1:721739399756:web:c0d1941e38e9a6f6c0eae9",
  measurementId: "G-CW2WKQMYHC"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Login com Google
function loginGoogle() {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      alert(`Login com Google realizado com sucesso! Bem-vindo, ${user.displayName}`);
      window.location.href = "inicio.html";
    })
    .catch((error) => {
      console.error("Erro no login com Google:", error);
      alert("Erro no login com Google: " + error.message);
    });
}

// Login com Facebook
function loginFacebook() {
  signInWithPopup(auth, facebookProvider)
    .then((result) => {
      const user = result.user;
      alert(`Login com Facebook realizado com sucesso! Bem-vindo, ${user.displayName}`);
      window.location.href = "inicio.html";
    })
    .catch((error) => {
      console.error("Erro no login com Facebook:", error);
      alert("Erro no login com Facebook: " + error.message);
    });
}

// Disponibilizar funções no escopo global para os botões HTML
window.loginGoogle = loginGoogle;
window.loginFacebook = loginFacebook;
