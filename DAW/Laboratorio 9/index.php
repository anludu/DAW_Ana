
<?php

function average(){
    
    $array = array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    echo $array;
    
    for ($i = 0 ; $i < 10 ; $i++){
        
        $aux = $aux + $array[i];
    }
    
    echo $aux/10;
}



?>