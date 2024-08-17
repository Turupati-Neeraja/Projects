//---------------------------MODEL-------------------------------//
let open=false
function see()
{
   const modal=document.getElementsByClassName('model')
   if(open)
    {
        modal[0].style.display='none'
        open=false;
        document.body.style.backgroundColor=''
    }
    else
    {
        modal[0].style.display='block'
        open=true;
        document.body.style.backgroundColor="rgb(152, 155, 188)"  //background changer//
    }
}
/*--- we can use the model in single line by using toogle ----
 let open=false
function see()
{
  document.querySelector('.model').classList.toggle('show')
} */

//-------------------------COUNTER----------------------------------//
let i=document.getElementsByClassName('num')
let count=0;
function dis()
{
    console.log(i[0].textContent=count)
}
// IT WILL STOP CHANGE VALUES BY BELOW CONDITIONS //
function stop()
{
    if(count<0)
    {
        alert("Value should be greater than 0")
        count=0;
    }
    dis()
}
// It will increase, decrease and reset the value //
function incre()
{
    count++;
    dis()
    final()
    value1()
}
function decre()
{
    count--;
    stop()
    final()
    value1()
}
function reset()
{
    count=0;
    dis();
    value = "----";
    result1()
    res = "----";
    result()
}
//IT will check the even or odd number //
let val=document.getElementsByClassName('eo')
let value = ''; 
function result1()
{
    val[0].textContent=value;
}
function value1()
{
    if(count%2===0)
    {
        value="even number"
    }
    else
    {
        value='odd number'
    }
    result1();
}
// IT will check the counter number is prime or not //
let numb=document.getElementsByClassName('eo')
let res='';
function result()
{
    numb[1].textContent=res;
}
function final()
{
  if(count<=1)
  {
    res="non-prime"
  }
  else
  {
    let temp=0;
    for(let x=2; x<=count/2; ++x)
    {
        if(count%x==0)
        {
            temp=1;
            break;
        }
    }
    if(temp==0)
        res="prime number"
    else
       res="non-prime"
  }
  result();
}
