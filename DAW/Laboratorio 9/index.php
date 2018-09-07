
<?php

$array = array(9, 6, 3, 7, 2, 6, 5, 8, 1);

function average($array){
    
    echo $array;
    
    for ($i = 0 ; $i < 9 ; $i++){
        
        $aux = $aux + $array[i];
    }
    
    echo $aux/10;
}


function median($array){
    
    echo $array;

    echo $array[CEILING(9/2)];
    
}

function BUBBLESORT($array){
    for ($i = 0 ; 9 ; $i++){
        for($j = 0 ; $i - 1 ; $j++){
            if($array[j] > $array[j + 1]){
                $aux = $array [j+1];
                $array[j + 1] = $array[j];
                $array[j] = $aux;
                
            }
        }
    }
}

function BBUBBLESORT($array){
    for ($i = 0 ; 9 ; $i++){
        for($j = 0 ; $i - 1 ; $j++){
            if($array[j] < $array[j + 1]){
                $aux = $array [j+1];
                $array[j + 1] = $array[j];
                $array[j] = $aux;
                
            }
        }
    }
}

function operations($array){
    
    echo $array;
    echo "<ul> <li>Promedio: " . average($array) . "</li> <li> Mediana: " . median($array) . "</li> <li>Menos a más: " . BUBBLESORT($array) . "</li><li>Más a menos: " . BBUBBLESORT($array). "</li></ul>";
    
}

function cuacu(){
    $n = 5;
    echo "<table> <tr> <th>números</th> ";
    for( $i = 0 ; $i < n; $i++){
        echo "<td>" . $i ."</td>";
    }
    echo"</tr>";
    
    echo "<table> <tr> <th>Cuadrados</th> ";
    for( $i = 0 ; $i < n; $i++){
        echo "<td>" . $i*$i ."</td>";
    }
    echo"</tr>";
    
    echo "<table> <tr> <th>números</th> ";
    for( $i = 0 ; $i < n; $i++){
        echo "<td>" . $i*$i*$i ."</td>";
    }
    echo"</tr>";
}

function vanyaAndFence(){
    
    $n = 3;
    $h = 7;
    $aux = 0;
    $friends = array(4, 5, 14);
    
    echo "Number of friends: " . $n . "height: " . $h . "Friend's height: " . $friends;
    
    for ($i = 0 ; $i < 3 ; $i++){
        
        if ($friends[i] > $n){
            $aux = $aux + 2;
        }
        else {
            $aux = $aux +1;
        }
    }
    echo $aux;
    
    
}

?>