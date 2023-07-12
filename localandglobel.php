<?php
// local and global variable 
$counter=0;
$file="count.txt";

function viewCount()
{
    global $counter, $file;
    if (file_exists($file)) //ypu are not the first user
    {
$counter=file_get_contents($file);
    }
    else // you are the first user
    {
$counter=0;
    }
    $counter++; //for future reference
    file_put_contents($file,$counter); // put the updated contents (counter) in the file. increment by one and add it to file 
    echo $counter."views";

}

viewCount();


?>