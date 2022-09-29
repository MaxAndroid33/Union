'use strict';

//navbar variables

const navbarNav =document.querySelector('.navbar-nav');
const navbarToggleBtn =document.querySelector('.nav-toggle-btn');


//navBarToggle functions 

navbarToggleBtn.addEventListener('click',function(){

    navbarNav.classList.toggle('active');
    this.classList.toggle('active');

});