function pag1(){
    let logir = document.getElementById("logar").value;
    if(logir == ""){
        alert('Informe seu nome');
    }
    else{
        sessionStorage.setItem('logar',logir);
        window.location = "principal.html"
    }
}


function buscarValor(){
    document.getElementById('nay').value = "Seja bem-vindo(a) " + sessionStorage.getItem('logar') + "!";
}



