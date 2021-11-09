//if(typeof(window.prompt())){

//}
resposta = window.prompt();
if(!isNaN(resposta)){
        for(var i=0; i<11; i++){
            alert(resposta * i);
        }
}else {
    alert("No es un num");
}
