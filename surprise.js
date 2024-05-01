

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
}
];

function getRandomImage(imgAr, path) {
  path = path || 'img/';
  let num = Math.floor(Math.random() * imgAr.length);
  let img = path + imgAr[num].img;
  let imgStr = `<a href='${imgAr[num].link}'><img src="${img}" alt="" height="400" border="0" /></a>`;
  document.querySelector('#img-container').innerHTML = imgStr;
}

document.getElementById('btn').addEventListener('click', () => {
  getRandomImage(random_images_array, 'img/image-container')
})