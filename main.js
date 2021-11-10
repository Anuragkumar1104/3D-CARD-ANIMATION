//movement to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const discription = document.querySelector('.info p');
const size = document.querySelector('.size');
//moving animation event
container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 5;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 5;
  card.style.transform = 'rotateY(${xAxis}deg) rotateX(${yAxis}deg)'
});
//animate in
container.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none';
  //pop out
  title.style.transform = 'translateZ(150px)';
  sneaker.style.transform = 'translateZ(200px) rotateZ(-45deg)';
  discription.style.transform = 'translateZ(125px)';
  size.style.transform = 'translateZ(100px)';
  purchase.style.transform = 'translateZ(75px)';
});
//animate out
container.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all 0.5s ease';
  card.style.transforme = 'rotateX(0deg) rotateY(0deg)';
  //popback
  title.style.transform = 'translateZ(0px)';
  sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
  discription.style.transform = 'translateZ(0px)';
  size.style.transform = 'translateZ(0px)';
  purchase.style.transform = 'translateZ(0px)';
});