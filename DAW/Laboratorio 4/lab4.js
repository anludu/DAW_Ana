
function numbers() {
    var num = prompt("Ingresa un numero: ", "0");
    
    var table = "";
    if (num > 1){
        
        table = table + "<tr> <th> Números </th>"
        for (var i = 1 ; i <= num ; i++){
            //imprimir numeros normales
            table = table + "<td>" + i + "</td>";
        }
        table = table + "</tr>";
        
        
        table = table + "<tr> <th> Cuadrados </th>"
        for (i = 1 ; i <= num ; i++){
            table = table + "<td>" + Math.pow(i, 2); + "</td>";
            //imprimir numeros al cuadrado
        }
        table = table + "</tr>";
        
        
        table = table + "<tr> <th> Cubo </th>"
        for (i = 1 ; i <= num ; i++){
            table = table + "<td>" + Math.pow(i, 3); + "</td>";
            //imprimir numeros al cubo
        }
        table = table + "</tr>";
        document.getElementById("señoratabla").innerHTML = table;
    }
}

function sum(){
    
    var a , b, time;
    a = parseInt(Math.random() * 100+1);//1 al 100
    b = parseInt(Math.random() * 100+1);
    
    startTime = new Date();
    
    var sum = prompt("Cuál es el resultado de la suma de " + a + " + " + b  , "0");
    
    endTime = new Date();
    
    if (sum == (a+b)){
        alert("Correcto!!!! te tomó : " + ((endTime - startTime)/1000) + " segundos");
    }else{
        alert("Incorrecto!!");
    }
}


function counter(){
    var num = prompt("¿Cuántos numeros vas a ingresar?", "1");
    
    var array = [];
    var mayor = 0, igual = 0, menor = 0;
    for (var i = 0 ; i < num ; i++){
        
        var numeros = prompt("Número " + (i+1) + ": ", "2");
        
        array.push(numeros);
    }

    for(i = 0; i < num ; i++){
        if (array[i] < 0 ){
            menor += 1;
        }
        else if (array[i] > 0 ){
            mayor += 1;
        }
        else if (array[i] == 0 ){
            igual += 1;
        }
    }
    
    alert ("Hay " + menor + " menores a 0, " + mayor + " mayores a 0 y " + igual + " ceros");
    
}


function average(){
    var num = prompt("¿Cuantos arreglos necesitas?", "0");
    var num1 = prompt("¿De qué tamaño serán tus arreglos?", "0");
    
    var acum = 0; 
    var res = 0;
    var strin = "";
    for (var i = 0; i < num ; i++){
        for(var j = 0; j < num1 ; j++){
            var arreglo = prompt("Arreglo " + (i + 1)+ " posición " + (j + 1));
            acum += Number(arreglo);
        }
        res = acum/num1;
        strin = strin + " " + res; 
        res = 0; 
        acum = 0;
    }
    document.getElementById("parrafo").innerHTML = strin;
}

function inverso(){
    var num = prompt("Inserta un número", "0");
    var aux, aux1;
    aux = num;
    aux1 = num;
    var invnum = ""; 

    while(aux > 0){
        aux1 = aux;
        aux1 = (aux % 10);
        invnum = invnum + aux1;
        aux = Math.floor((aux/10));
    }
    document.getElementById("inv").innerHTML = invnum;
}