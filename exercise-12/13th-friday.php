<?php 
 function validateDay($year, $month, $day = 13){
    return date('l', strtotime("$year-$month-$day")) == 'Friday'? 'True': 'False';
 }

echo validateDay(2024, 9);
echo "\n";
echo validateDay(2025, 2);

?>