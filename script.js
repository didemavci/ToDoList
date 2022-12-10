let btnadd=document.getElementById('btnadd');
let toDoContainer=document.getElementById('toDoContainer');
let inputtext=document.getElementById('inputtext');
let btnclear=document.getElementById('btnclear');

//let title=document.getElementById('title');


//addButton.style.color='red';
btnadd.addEventListener('click', function()
{
let paragraph =document.createElement('p');//paragraf oluşturdum
paragraph.classList.add('paragraph-styling');//görevleri sıaralama
toDoContainer.appendChild(paragraph); //paragrafı container içine aktar
paragraph.innerHTML=inputtext.value;//yazıyı p etiketi içine aktar
inputtext.value='';

paragraph.addEventListener('click', function()
{
    paragraph.style.textDecoration='line-through';//yazıya bir kere tıklanırsa üstünü çiz
}
)

paragraph.addEventListener('dblclick', function()
{
    toDoContainer.removeChild(paragraph);//2 kere tıklayınca siler
}
)
btnclear.addEventListener('click',function()
{
  //  paragraph.style.display='none';
  paragraph.remove();
})

});

