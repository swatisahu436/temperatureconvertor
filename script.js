var cel= document.getElementById("cel");
var fah= document.getElementById("fah");
var kelv= document.getElementById("kelv");
var click=document.getElementById("click").onclick=changecolor;
 function changecolor(){
   document.getElementById("click").style.background="brown";
}

cel.addEventListener('input',function(){
    let c=this.value
    let f =(c * 9/5) + 32; 
    fah.value=f;
    let k = c+ 273.15;
    kelv.value=k ;
});
fah.addEventListener('input',function(){
    let f =this.value
    let c =(f- 32)*5/9 ; 
    cel.value=c;
    let  k =(f- 32)*5/9+273.15; 
    kelv.value=k ;
});
kelv.addEventListener('input',function(){
    let k=this.value
    let c= k-273.15;
    cel.value=c;
    let f =(k-273.15) * 9/5+ 32;
    fah.value=f ;
    });
var button =document.getElementById("button");
button.addEventListener('click',function(){
    cel.value='';
    fah.value='';
    kelv.value='';
});



