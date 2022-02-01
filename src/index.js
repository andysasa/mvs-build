import './style.css';
import '../assets/images/rifruf-copy.jpg';
import '../assets/images/profile-photo.jpg';
import '../assets/images/corgi.jpg';

document.querySelector('button').addEventListener('click', function() {
    this.classList.toggle('open');
    document.querySelector('nav').classList.toggle('translate-x-full');
  })