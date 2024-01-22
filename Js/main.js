const togglebtn = document.querySelector('.toggle_btn')
const togglebtnIcon = document.querySelector('.toggle_btn i')
const menu = document.querySelector('.menu')

togglebtn.onclick = function(){
    menu.classList.toggle('open')
    alert("i wokr")
}
//make menu drop down