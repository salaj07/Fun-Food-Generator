var mul=[{
    name:'burger.png'
},{
    name:'pizza.png'
},{
    name:'fries.png'
},{
    name:'coffee.png'
},{
    name:'pasta.png'
}]


var btn=document.querySelector('button')

btn.addEventListener('click',function(){

  var img1=Math.floor(Math.random()*mul.length);
  var ing=mul[img1];
    // console.log(mul[img1]);

    var x=Math.random()*80;
    var y=Math.random()*70;
    var rot=Math.random()*360;

    var img2=document.createElement('img')
  
    img2.setAttribute('src',ing.name)
    // console.log(img2);

     img2.style.height='200px'
     img2.style.position='absolute'
     img2.style.left=x+'%'
     img2.style.top=y+'%'
    //  img2.style.rotate=rot+'deg'

document.body.appendChild(img2);

})
