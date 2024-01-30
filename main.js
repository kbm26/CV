
//Firebase setup
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkezJw1gaE13oQkzTbEJcjET3_Wcgtics",
  authDomain: "online-resume-be1d1.firebaseapp.com",
  databaseURL: "https://online-resume-be1d1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "online-resume-be1d1",
  storageBucket: "online-resume-be1d1.appspot.com",
  messagingSenderId: "40967030925",
  appId: "1:40967030925:web:fb326d83a73cfe586bfac4"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const database = firebase.database()
const ref = database.ref("messages")


document.addEventListener("DOMContentLoaded", () => {
    const togglebtn = document.querySelector('.toggle_btn')
    const menu = document.querySelector('.menu')

    togglebtn.addEventListener('click',function(){
        menu.classList.toggle('open')
    })

    const form = document.querySelector('.form')
    form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const name = document.getElementById('fullName').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    
    ref.push({
        name:name,
        email:email,
        message:message
    })
    
    alert("Form successfully submitted")
    // form.reset()

    ref.on('child_added', (snapshot, prevChildKey) => {
        const newPost = snapshot.val();
        console.log('Author: ' + newPost.author);
        console.log('Title: ' + newPost.title);
        console.log('Previous Post ID: ' + prevChildKey);
      });
})
})

