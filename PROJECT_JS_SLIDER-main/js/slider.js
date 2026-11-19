// Character portraits use a single official-style ensemble wallpaper as a self-contained visual backdrop.
// Replace any image URL in this array with your own locally licensed RDR2 artwork if desired.
const artwork = "https://images.alphacoders.com/958/958091.jpg";
const updates = [
 {
  image:"./images/arthur.jpg",
  kicker:"THE RIGHT-HAND MAN · CHAPTER I",
  title:"ARTHUR MORGAN",
  description:"A loyal enforcer with a troubled conscience."
 },
 {
  image:"./images/dutch.jpg",
  kicker:"THE MAN WITH A PLAN · CHAPTER II",
  title:"DUTCH VAN DER LINDE",
  description:"A charismatic leader chasing freedom."
 },
 {
  image:"./images/john.jpg",
  kicker:"A SECOND CHANCE · CHAPTER III",
  title:"JOHN MARSTON",
  description:"A survivor trying to leave his outlaw past behind."
 },
 {
  image:"./images/sadie.jpg",
  kicker:"THE WIDOW · CHAPTER IV",
  title:"SADIE ADLER",
  description:"Grief forged her into a fearless gunslinger."
 },
 {
  image:"./images/hosea.jpg",
  kicker:"THE OLD FRIEND · CHAPTER V",
  title:"HOSEA MATTHEWS",
  description:"A seasoned con man and storyteller."
 },
 {
  image:"./images/charles.jpg",
  kicker:"THE OUTSIDER · CHAPTER VI",
  title:"CHARLES SMITH",
  description:"Quiet, capable, and dependable."
 }
];
let currentIndex=0, timer=null;
const slider=document.getElementById('slider'), slide=document.querySelector('.slide');
const image=document.getElementById('currentImage'), title=document.getElementById('current-title'), desc=document.getElementById('current-description');
const kicker=document.getElementById('current-kicker'), progress=document.getElementById('progress-bar');
function showSlide(){const item=updates[currentIndex];image.src=item.image;image.alt=`Western artwork for ${item.title}`;title.textContent=item.title;desc.textContent=item.description;kicker.textContent=item.kicker;document.getElementById('current-number').textContent=String(currentIndex+1).padStart(2,'0');document.getElementById('total-number').textContent=String(updates.length).padStart(2,'0');progress.style.width=((currentIndex+1)/updates.length*100)+'%';slide.classList.remove('fade-in');void slide.offsetWidth;slide.classList.add('fade-in');}
function nextSlide(){currentIndex=(currentIndex+1)%updates.length;showSlide()}function prevSlide(){currentIndex=(currentIndex-1+updates.length)%updates.length;showSlide()}
function start(){if(timer||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;timer=setInterval(nextSlide,6000)}function stop(){clearInterval(timer);timer=null}
document.querySelector('.next-btn').addEventListener('click',()=>{nextSlide();stop();start()});document.querySelector('.prev-btn').addEventListener('click',()=>{prevSlide();stop();start()});slider.addEventListener('mouseenter',stop);slider.addEventListener('mouseleave',start);slider.addEventListener('focusin',stop);slider.addEventListener('focusout',start);document.addEventListener('visibilitychange',()=>document.hidden?stop():start());showSlide();start();
