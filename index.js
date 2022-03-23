let headerMenu = document.querySelector('.header-menu');
let burger = document.querySelector('.burger');
let arrow = document.querySelector('.arrow');
let exampleOfCode = document.querySelector('.example');
let headerLinks = document.querySelectorAll('.header-link');

/*----BURGER-------------*/

burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    headerMenu.classList.toggle('active');
})
for(let link of headerLinks){
    link.addEventListener('click', function(){
        headerMenu.classList.remove('active');
        burger.classList.remove('active');
    })
}

/*------------------------*/