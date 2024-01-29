document.addEventListener("DOMContentLoaded", function () {
    const togglebtn = document.querySelector('.toggle_btn')
    const menu = document.querySelector('.menu')

    togglebtn.addEventListener('click',function(){
        menu.classList.toggle('open')
    })
});