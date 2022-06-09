var button=document.getElementById("btn");

if ( count=1) {
    button.onclick=function(){
        count=count+1;
        btn.innerHTML="ra xdeba" + count;
    };
    
}  
 else{
    button.onclick=function(){
        count=count-1;
        btn.innerHTML="ra xdeba" + count;
    };
}