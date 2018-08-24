function verification(){
    
    var p = document.getElementById("password").value; 
    var cp = document.getElementById("cPassword").value;
    
    if ((p != null || p != "") && (cp != null || p != "")){
       if (p == cp){
           alert("Las contraseñas coinciden");
       }
        else if (p != cp){
            alert("Las contraseñas no coinciden");
        }
    }
    else{
        alert("Llenar todos los campos");    
    }
}

function printt(){
    var printo = "";
    var name = document.getElementById("nombre").value;
    var matricula = document.getElementById("matricula").value;
    var semestre = document.getElementById("semestre").value;
    var carrera = document.getElementById("carrera").value;
    printo = printo + "Nombre del estudiante: \n" + name + "     \nMatricula: \n" + matricula + "    \nSemestre: \n" + semestre + "     \nCarrera: \n" + carrera;
    alert(printo);
    document.getElementById("print").innerHTML = printo;
}