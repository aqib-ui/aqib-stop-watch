var min = 0;
var sec= 0;
var msec=0;
var flag=0;
var inpu=""


var minhead=document.getElementById("minu");
var sechead=document.getElementById("seco");
var msechead=document.getElementById("milisec");
var interval;
function timer(){
    msec++
msechead.innerHTML=msec;
if(msec >=100){
    sec++
    sechead.innerHTML=sec;
    msec=0;
}
else if(sec>=60){
    min++
    minhead.innerHTML=min;
    sec=0
}
}
function start(){
    document.getElementById("music").play()
    user()
interval=setInterval(timer, 10);
flag=1
if(flag==1){
    var bt=document.getElementById("btnn").disabled=true;
    }
    var a=document.getElementById("minu")
    a.classList.remove("new")
    var b=document.getElementById("seco")
    b.classList.remove("new")
    var c=document.getElementById("milisec")
    c.classList.remove("new")
    
}
function stop(){
    sto();
    clearInterval(interval)
    flag=0;
    if(flag==0){
        var bt=document.getElementById("btnn").disabled=false;  
    }
    document.getElementById("music").play()
    var a=document.getElementById("minu")
    a.classList.add("new")
    var b=document.getElementById("seco")
    b.classList.add("new")
    var c=document.getElementById("milisec")
    c.classList.add("new")
}
function reset(){
    min=0;
    sec=0;
    msec=0;
    minhead.innerHTML=min;
    sechead.innerHTML=sec;
    msechead.innerHTML=msec;
    stop()
    var b=document.getElementById("inp");
    b.innerHTML="Click Start"
    var a=document.getElementById("minu")
    a.classList.add("new")
    var b=document.getElementById("seco")
    b.classList.add("new")
    var c=document.getElementById("milisec")
    c.classList.add("new")
    document.getElementById("music").play()
    
}
function user(){
 inpu=prompt("enter your name");
 var a=document.getElementById("inp");
 a.innerHTML=inpu;


}
function sto(){
    var us=document.getElementById("minu");
    var uss=document.getElementById("seco");
    var usss=document.getElementById("milisec");
    var ent=document.getElementById("inp");
    ent.innerHTML=inpu+" has completed his task in "+us.innerHTML+" Minutes "+uss.innerHTML+" Seconds"+usss.innerHTML+" MiliSeconds";
    
    
}
var a=new Date();
var get=document.getElementById("date");
get.innerHTML=a


