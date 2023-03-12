const decbtn=document.getElementById("decre");
const incbtn=document.getElementById("incre");
const resset=document.getElementById("resset");
const view=document.getElementById("displayvalue");
function incrementor()
{
    const value=Number(view.innerText);
    if(value>=10)
    {
        alert("10+ not allowed");
    }
    else
    {
        view.innerText=value+1;
    }
}
incbtn.addEventListener("click",incrementor);
function decrementor()
{
    const value=Number(view.innerText);
    if(value>0)
    {
        view.innerText=value-1;
    }
    else
    {
       alert("Negative values nor allowed");
    }
}
decbtn.addEventListener("click",decrementor);
function resett()
{
    view.innerText=0;
}
resset.addEventListener("click",resett);