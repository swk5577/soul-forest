const tel = document.querySelector('.tel');


function scroll(){

    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth"});  
}

tel.addEventListener('click',scroll)