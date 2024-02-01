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
const ref = database.ref("messages/")



const dbTable = document.querySelector('.table')
const dbBtn = document.querySelector('.display-database')

const prompt = document.querySelector('.prompt')
const togglebtn = document.querySelector('.toggle_btn')
const menu = document.querySelector('.menu')


togglebtn.addEventListener('click',function(){
    menu.classList.toggle('open')
})

const form = document.querySelector('.form')
form.addEventListener("submit", (e)=>{
  e.preventDefault()
  const name = document.getElementById('password').value
  if(name ==="thabang"){
    dbBtn.disabled = false;
    form.classList.toggle('close')
    form.remove()
    prompt.remove()
  }else{
    prompt.textContent = "Enter the correct password please"
  }

})

dbBtn.addEventListener('click',()=>{
    ref.on('value', (snapshot) => {
        let html = "<thead><tr><th>Name</th><th>Email</th><th>Message</th></tr></thead><tbody>"
        snapshot.forEach((item) => {
            var itemVal = item.val();
            html += 
            `<tr><td>${itemVal.name}</td>`+
            `<td>${itemVal.email}</td>`+
            `<td>${itemVal.message}</td></tr>`
        });
        dbTable.innerHTML = html+"</tbody>"
      }, (errorObject) => {
        console.log('The read failed: ' + errorObject.name);
      }); 
      dbTable.classList.toggle('open')


      if(dbBtn.textContent == "Hide All Entries in Database"){
        dbBtn.textContent = "Display All Entries in Database"
      }else{
        dbBtn.textContent = "Hide All Entries in Database"
      }
      
    
})
