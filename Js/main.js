document.addEventListener("DOMContentLoaded", function () {
    // Select the elements
    const togglebtn = document.querySelector('.toggle_btn')
    const menu = document.querySelector('.menu')

    // Add click event listener to the toggle button
    togglebtn.addEventListener('click',function(){
        menu.classList.toggle('open')
    })
});