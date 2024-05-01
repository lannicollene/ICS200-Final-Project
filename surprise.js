let random_images_array = [{
  img: "ICS200-Final-Project/images/spirited-away.jpg",
  link: "April.html"
},
{
  img: "ICS200-Final-Project/images/Nausicaa.jpg",
  link: "May.html#Nausicaa"
},
{
  img: "ICS200-Final-Project/images/Castle.jpg",
  link: "May.html#Castle"
}, 
{
  img: "ICS200-Final-Project/images/Arrietty.jpg",
  link: "June.html#Arrietty"
},
{
  img: "ICS200-Final-Project/images/Marnie.jpg",
  link: "June.html#Marnie"
},
{
  img: "ICS200-Final-Project/images/Mononoke.jpg",
  link: "July.html#Mononoke"
},
{
  img: "ICS200-Final-Project/images/Ponyo.jpg",
  link: "August.html#Ponyo"
},
{
  img: "ICS200-Final-Project/images/Whisper.jpg",
  link: "August.html#Whisper"
},
{
  img: "ICS200-Final-Project/images/CatReturns.jpg",
  link: "August.html#Cat"
},
{
  img: "ICS200-Final-Project/images/Howls.jpg",
  link: "September.html#Howls"
},
{
  img: "ICS200-Final-Project/images/Kiki.jpg",
  link: "October.html#Kiki"
},
{
  img: "ICS200-Final-Project/images/PomPoko.jpg",
  link: "November.html#PomPoko"
},
{
  img: "ICS200-Final-Project/images/Kaguya.jpg",
  link: "November.html#Kaguya"
},
{
  img: "ICS200-Final-Project/images/Totoro.jpg",
  link: "December.html#Totoro"
}
];


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
