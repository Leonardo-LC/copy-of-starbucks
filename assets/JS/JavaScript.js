
function agradecimento(event){
     
    const link = event.target;


    if(link.innerText === 'Saiba mais'){
        link.innerText = "Obrigado";
    } else {
        link.innerText = "Saiba mais";
    }
}

