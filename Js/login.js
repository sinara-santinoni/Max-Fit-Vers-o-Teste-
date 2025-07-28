// js/login.js

// Importa Firebase direto do CDN (versão 9.6.1)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Configuração do Firebase do seu projeto
const firebaseConfig = {
  apiKey: "AIzaSyA0OZNiMCVqXJ2TWYwY_mF1dytgnZLdLIk",
  authDomain: "max-fit-24c41.firebaseapp.com",
  projectId: "max-fit-24c41",
  storageBucket: "max-fit-24c41.appspot.com",
  messagingSenderId: "721739399756",
  appId: "1:721739399756:web:c0d1941e38e9a6f6c0eae9",
  measurementId: "G-CW2WKQMYHC"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Função de login com Google
function loginGoogle() {
  console.log("Botão Google clicado");
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert(`Login com Google realizado com sucesso! Bem-vindo, ${user.displayName}`);
      window.location.href = "inicio.html"; // Redireciona após login
    })
    .catch((error) => {
      console.error("Erro ao fazer login com o Google:", error);
      alert("Erro ao fazer login com o Google: " + error.message);
    });
}

// Deixa a função acessível no botão do HTML
window.loginGoogle = loginGoogle;
