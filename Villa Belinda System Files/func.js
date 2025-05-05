// Sidebar-Admin
const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

// Login-Modal
const OpenLogin = document.querySelector('#login-modal');
const DialogLogin = document.querySelector('#dialog-login');

OpenLogin.addEventListener('click', () => DialogLogin.showModal());

// Register-Modal
const OpenRegis = document.querySelector('#regis-modal');
const DialogRegis = document.querySelector('#dialog-regis');

OpenRegis.addEventListener('click', () => DialogRegis.showModal());


// ADDING A FUNCTION FOR TOGGLE SIDEBAR
function toggleSidebar(){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
   
    // DECLARING SIDEBAR TO SHOW AND ROTATE THE SVG ICON  
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul=>{
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    } )
}

// ADDING FUNCTION FOR TOGGLE SUBMENU
function toggleSubMenu(button){
    button.nextElementSibling.classList.toggle('show') 
    button.classList.toggle('rotate')
    // CLOSING THE SUBMENU WHEN THE TOGGLE SIDEBAR IS SELECTED
    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close')
            toggleButton.classList.toggle('rotate')
    }
}

new Swiper('.card-wrapper', {
    // Optional parameters
    loop: false,
    spaceBetween: 20,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
    breakpoints:{
        0:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        },
    }
  });
