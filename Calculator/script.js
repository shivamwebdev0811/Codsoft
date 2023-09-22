let num1=document.getElementById("one");
let num2=document.getElementById("two");
let num3=document.getElementById("three");
let num4=document.getElementById("four");
let num5=document.getElementById("five");
let num6=document.getElementById("six");
let num7=document.getElementById("seven");
let num8=document.getElementById("eight");
let num9=document.getElementById("nine");

let num0=document.getElementById("zero");
let addnum=document.getElementById("add");
let mul=document.getElementById("mul");
let div=document.getElementById("div");
let min=document.getElementById("min");
let inp=document.getElementById("input");
let clr=document.getElementById("clear");
let resultbox=document.getElementById("result");
let prevValue=0;
inp.value=prevValue;
let result=0;
num1.addEventListener("click",()=>
{
    if(inp.value==0 && inp.value.length>0)
    {
        inp.value=1;
    }
    else 
    {
        inp.value+=1;
    }
})
num2.addEventListener("click",()=>
{
    if(inp.value==0 && inp.value.length>0)
    {
        inp.value=2;
    }
    else 
    {
        inp.value+=2;
    }
})
num3.addEventListener("click",()=>
{
    if(inp.value==0 && inp.value.length>0)
    {
        inp.value=3;
    }
    else 
    {
        inp.value+=3;
    }
})
num4.addEventListener("click",()=>
{
    if(inp.value==0 && inp.value.length>0)
    {
        inp.value=4;
    }
    else 
    {
        inp.value+=4;
    }
})
num5.addEventListener("click",()=>
{
    if(inp.value==0 && inp.value.length>0)
    {
        inp.value=5;
    }
    else 
    {
        inp.value+=5;
    }
})
num6.addEventListener("click",()=>
{
    if(inp.value==0 && inp.value.length>0)
    {
        inp.value=6;
    }
    else 
    {
        inp.value+=6;
    }
})
num7.addEventListener("click",()=>
{
    if(inp.value==0 && inp.value.length>0)
    {
        inp.value=7;
    }
    else 
    {
        inp.value+=7;
    }
})
num8.addEventListener("click",()=>
{
    if(inp.value==0 && inp.value.length>0)
    {
        inp.value=8;
    }
    else 
    {
        inp.value+=8;
    }
})
num9.addEventListener("click",()=>
{
    if(inp.value==0 && inp.value.length>0)
    {
        inp.value=9;
    }
    else 
    {
        inp.value+=9;
    }
})
num0.addEventListener("click",()=>
{
    if(inp.value==0 && inp.value.length>0)
    {
        inp.value=0;
    }
    else 
    {
        inp.value+=0;
    }
})

clr.addEventListener("click",()=>
{
    inp.value=0;
    resultbox.innerHTML=null;
    result=0;
})

addnum.addEventListener("click",()=>
{
    prevValue=parseInt(inp.value);
    result+=prevValue;
    inp.value=0;
    resultbox.innerHTML=result+"+";
})
mul.addEventListener("click",()=>
{
    prevValue=parseInt(inp.value);
    result*=prevValue;
    inp.value=0;
    resultbox.innerHTML=result+"*";
})
div.addEventListener("click",()=>
{
    prevValue=parseInt(inp.value);
    result/=prevValue;
    inp.value=0;
    resultbox.innerHTML=result+"/";
})
min.addEventListener("click",()=>
{
    prevValue=parseInt(inp.value);
    result-=prevValue;
    inp.value=0;
    resultbox.innerHTML=result+"-";
})
equal.addEventListener("click",()=>
{
    inp.value=result;
})

document.addEventListener("keydown",(e)=>{
    if(e.key==="Enter")
    inp.value=result;
})