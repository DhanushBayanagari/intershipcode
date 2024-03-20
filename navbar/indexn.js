var navbar=0

function toggle(){
    if(!navbar){
   $('.maindiv').css('width','100%')
   $('li').css('display','block');
    navbar=1
    }
    else{
        $('.maindiv').css('width','0')
        $('li').css('display','none');
         navbar=0
    }
}