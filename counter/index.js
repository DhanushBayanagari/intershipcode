function increment(){
    var num=Number(document.getElementById('number').innerHTML);
    document.getElementById('number').innerHTML=num+1
}
function decrement(){
    var num=Number(document.getElementById('number').innerHTML);
    document.getElementById('number').innerHTML=num-1

    if(document.getElementById('number').innerHTML<0){
        document.getElementById('number').innerHTML=0;
    }
}
function neutral(){
   
    document.getElementById('number').innerHTML=0;
}