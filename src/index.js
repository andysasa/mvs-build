import './style.css';
import '../assets/images/profile-photo.jpg';
import '../assets/images/cbd-news-template.png'

document.querySelector('button').addEventListener('click', function() {
    this.classList.toggle('open');
    document.querySelector('nav').classList.toggle('translate-x-full');

    
  })