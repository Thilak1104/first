function fun()
{
    console.log(x);
    var x = 10;
    console.log(x);
}

{
    var y = 8;
}

console.log(y);

if(true){
    var z = 30;
}
if (false){
    var a = 20;
}

console.log(z);
console.log(a); 

console.log(x);
 
fun();