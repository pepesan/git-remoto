
function distinta(){
    console.log("Distinta");
}

function escribe_cosas(){
    document.write("Cosas");
}

function main(){
    /*
    función principal del frontend
     */
    console.log("Iniciando");
    escribe_cosas();
    distinta();
}
document.addEventListener("DomContentLoaded", main);
