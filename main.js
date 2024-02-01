const firebaseConfig = {
  apiKey: "AIzaSyCkezJw1gaE13oQkzTbEJcjET3_Wcgtics",
  authDomain: "online-resume-be1d1.firebaseapp.com",
  databaseURL: "https://online-resume-be1d1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "online-resume-be1d1",
  storageBucket: "online-resume-be1d1.appspot.com",
  messagingSenderId: "40967030925",
  appId: "1:40967030925:web:fb326d83a73cfe586bfac4"
};


firebase.initializeApp(firebaseConfig);
const database = firebase.database()


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
    
    database.ref('messages/'+name).set({
        name:name,
        email:email,
        message:message
    })
    alert("Form successfully submitted")
})




