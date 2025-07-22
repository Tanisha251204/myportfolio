/*console.log("script running...");
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
document.querySelector('.sidebargo').classList.toggle('sidebargo')

})*/
console.log("script running...");

document.querySelector('.cross').style.display = 'none';

document.querySelector('.hamburger').addEventListener("click", () => {
    const sidebar = document.querySelector('.sidebar');

    sidebar.classList.toggle('sidebargo');

    // Toggle hamburger and cross visibility
    if (sidebar.classList.contains('sidebargo')) {
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    } else {
        document.querySelector('.ham').style.display = 'none';
        setTimeout(()=> {
        document.querySelector('.cross').style.display = 'inline'},300);
    }
});
window.addEventListener('resize', () => {
    if(window.innerWidth <= 768) {
        document.querySelector('.sidebar').classList.remove('sidebargo');
    }
});

