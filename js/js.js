const anime = document.getElementById("video");

anime.forEach(item => {
    item.addEventListener('click', suave);
});

function suave(event){
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top:to, 
        behavior:"smooth"
    });
    
}