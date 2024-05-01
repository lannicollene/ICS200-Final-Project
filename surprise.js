

let random_images_array = [{
  img: "images/spirited-away.jpg",
  link: "April.html"
},
{
  img: "images/Nausicaa.jpg",
  link: "May.html#Nausicaa"
},
{
  img: "images/Castle.jpg",
  link: "May.html#Castle"
}, 
{
  img: "images/Arrietty.jpg",
  link: "June.html#Arrietty"
},
{
  img: "images/Marnie.jpg",
  link: "June.html#Marnie"
},
{
  img: "images/Mononoke.jpg",
  link: "July.html#Mononoke"
},
{
  img: "images/Ponyo.jpg",
  link: "August.html#Ponyo"
},
{
  img: "images/Whisper.jpg",
  link: "August.html#Whisper"
},
{
  img: "images/CatReturns.jpg",
  link: "August.html#Cat"
},
{
  img: "images/Howls.jpg",
  link: "September.html#Howls"
},
{
  img: "images/Kiki.jpg",
  link: "October.html#Kiki"
},
{
  img: "images/PomPoko.jpg",
  link: "November.html#PomPoko"
},
{
  img: "images/Kaguya.jpg",
  link: "November.html#Kaguya"
},
{
  img: "images/Totoro.jpg",
  link: "December.html#Totoro"
}
];

//function getRandomImage(imgAr, path) {
//  path = path || 'images/';
//  let num = Math.floor(Math.random() * imgAr.length);
 // let img = path + imgAr[num].img;
 // console.log()
 // let imgStr = `<a href='${imgAr[num].link}'><img src="${img}" alt="" height="400" border="0" /></a>`;
// document.querySelector('#img-container').innerHTML = imgStr;
//}

function getRandomImage(imgAr, path) {
// Add a slash ("/") at the end of the path if it's missing
path = path.endsWith('/') ? path : path + '/';
let num = Math.floor(Math.random() * imgAr.length);
let img = path + imgAr[num].img;
let imgStr = `<a href='${imgAr[num].link}'><img src="${img}" alt="" height="500" border="0" target="_blank" /></a>`;
document.querySelector('#image-container').innerHTML = imgStr;
}

document.getElementById('btn').addEventListener('click', () => {
  getRandomImage(random_images_array, '/')
})
