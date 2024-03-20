function clr(){
    document.getElementById('textarea').value='';
}
function display(value){
    document.getElementById('textarea').value+=value;
}
function calc(){
    var value=document.getElementById('textarea').value;
    var ans=eval(value);
    document.getElementById('textarea').value=ans;

}