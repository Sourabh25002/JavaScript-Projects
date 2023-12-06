var x = 0;
document.getElementById("demo").innerHTML = x;



function myFunction1(){
    x--;
    document.getElementById("demo").innerHTML = x;
    if(x == 0){
        document.getElementById("demo").style.color = "black";
    } 
    else if(x < 0){
        document.getElementById("demo").style.color = "red";
    }
}

function myFunction2(){
    x++;
    document.getElementById("demo").innerHTML = x;
    if(x == 0){
        document.getElementById("demo").style.color = "black";
    } 
    else if(x > 0){
        document.getElementById("demo").style.color = "green";
    }
}