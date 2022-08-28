
let nombre=localStorage.getItem('nombre');

let visitas=parseFloat(localStorage.getItem('visitas'))||1;

let divIdentificacion=document.querySelector("#divDeIdentificar");

let divContador=document.querySelector('#divContador')

divContador.innerHTML=('<p>Usted visito este sitio '+visitas+' veces</p>')

window.addEventListener('load',contarVisita)

pintarHtml()

function pintarHtml(){
    if (nombre==("")||nombre==(null)){
        divIdentificacion.innerHTML=("<p title="+"Haga_click_aqui_para_identificarse"+">Bienvenida/o </p>" );
    }else{
        divIdentificacion.innerHTML=("<p>Bienvenida/o </p>"+nombre );
    }
    divIdentificacion.addEventListener("click",identificarUsuario);
}


function identificarUsuario(){
    
        let nombre=prompt("ingrese su nombre")  ;
    
    localStorage.setItem('nombre',nombre);
    
    if (nombre==("")){
        alert("No se puede dejar este campo vacio");
    }else{
        divIdentificacion.innerHTML=("Bienvenida/o "+nombre );
        
    }
}



function contarVisita(){
    visitas=visitas+1
    parseFloat(visitas)
    localStorage.setItem('visitas',visitas)
    parseFloat(visitas)
    console.log(visitas)
}

