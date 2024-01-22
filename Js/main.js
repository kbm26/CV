const togglebtn = document.querySelector('.toggle_btn')
const togglebtnIcon = document.querySelector('.toggle_btn i')
const menu = document.querySelector('.dropdownmenu')

togglebtn.onclick = function(){
    const isOpen = menu.classList.contains('open');
    togglebtnIcon.classList = isOpen 
    ? 'fa-solid fa-xmark' 
    : 'fa-solid fa-bars'
}