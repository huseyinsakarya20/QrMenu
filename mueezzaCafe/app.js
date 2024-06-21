const barMenu = document.getElementById("menuBar");
const containerLeftMenu = document.querySelector(".containerLeftMenu");
const backİcon = document.getElementById("iconBack");

barMenu.onclick = () => {
    barMenu.classList.toggle("bx-x");
    containerLeftMenu.classList.toggle("active")
}

backİcon.onclick  = () =>{
    window.history.back();
} 



/*ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    deley: 200,
 });

 ScrollReveal().reveal('.containerLeftMenu', { origin: 'left' }); */
