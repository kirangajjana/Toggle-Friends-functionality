let data=document.querySelector('#friend')
let button=document.querySelector('#button')
let button1=document.querySelector('#button1')



button.addEventListener('click',function()
{
    data.innerHTML="Friends";
    data.style.color="green";
});


button1.addEventListener('click',function()
{
    data.innerHTML="Strangers"
    data.style.color='red';
})