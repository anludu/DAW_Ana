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

function purchaseP(){ 
    document.getElementById("pandemic").style.fontStyle = "italic";
    var qty = document.getElementById("cantidad").value;
    if (qty > 0){
        if (qty >= 10 && qty <= 50){
            alert("Felcidades, tienes un descuento del 10%");
            alert("Precio normal : $" + 40.02 + "\nPrecio con descuento: $" + (40.02 -(40.02*0.10))+ "\nPrecio total: $" + (40.02 -(40.02*0.10))*qty);
            alert("\nGacias por preferirnos!!!!!!\n");
        } 
        else if (qty > 50){
            alert("Felcidades, tienes un descuento del 50%");
            alert("Precio normal : $" + 40.02 + "\nPrecio con descuento: $" + (40.02 -(40.02*0.50)) + "\nPrecio total: $" + (40.02 -(40.02*0.50))*qty);
            alert("\nGacias por preferirnos!!!!!!\n"); 
        } 
        else{
            alert("Precio Final : $" + 40.02*qty);
            alert("\nGacias por preferirnos!!!!!!\n"); 
        }
    }    
}

function purchaseLC(){ 
    document.getElementById("love").style.fontStyle = "italic";
    var qty = document.getElementById("cantidad1").value;
    if (qty > 0){
        if (qty >= 10 && qty <= 50){
            alert("Felcidades, tienes un descuento del 10%");
            alert("Precio normal : $" + 29.99 + "\nPrecio con descuento: $" + (29.99 -(29.99*0.10))+ "\nPrecio total: $" + (29.99 -(29.99*0.10))*qty);
            alert("\nGacias por preferirnos!!!!!!\n");
        } 
        else if (qty > 50){
            alert("Felcidades, tienes un descuento del 50%");
            alert("Precio normal : $" + 29.99 + "\nPrecio con descuento: $" + (29.99 -(29.99*0.50)) + "\nPrecio total: $" + (29.99 -(29.99*0.50))*qty);
            alert("\nGacias por preferirnos!!!!!!\n"); 
        } 
        else{
            alert("Precio Final : $" + 29.99*qty);
            alert("\nGacias por preferirnos!!!!!!\n"); 
        }
    }    
}

function purchaseSG(){ 
    document.getElementById("sushi").style.fontStyle = "italic";
    var qty = document.getElementById("cantidad2").value;
    if (qty > 0){
        if (qty >= 10 && qty <= 50){
            alert("Felcidades, tienes un descuento del 10%");
            alert("Precio normal : $" + 19.99 + "\nPrecio con descuento: $" + (19.99 -(19.99*0.10))+ "\nPrecio total: $" + (19.99 -(19.99*0.10))*qty);
            alert("\nGacias por preferirnos!!!!!!\n");
        } 
        else if (qty > 50){
            alert("Felcidades, tienes un descuento del 50%");
            alert("Precio normal : $" + 19.99 + "\nPrecio con descuento: $" + (19.99 -(19.99*0.50)) + "\nPrecio total: $" + (19.99 -(19.99*0.50))*qty);
            alert("\nGacias por preferirnos!!!!!!\n"); 
        } 
        else{
            alert("Precio Final : $" + 19.99*qty);
            alert("\nGacias por preferirnos!!!!!!\n"); 
        }
    }    
}

var time = setInterval(clock, 1000);
function clock(){
    var d = new Date();
    var timeAux = d.toLocaleTimeString();
    document.getElementById("clockID").innerHTML = timeAux;

}