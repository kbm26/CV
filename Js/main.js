document.addEventListener("DOMContentLoaded", () => {
    const togglebtn = document.querySelector('.toggle_btn')
    const menu = document.querySelector('.menu')

    togglebtn.addEventListener('click',function(){
        menu.classList.toggle('open')
    })

    const form = document.querySelector('.form')
    form.addEventListener("submit", (e)=>{
    e.preventDefault
    const name = document.getElementById('fullName').value
    const email = document.getElementById('email').value
    const message = document.getElementById('email').value
    alert(name,email,message)
})
})

