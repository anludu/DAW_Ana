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