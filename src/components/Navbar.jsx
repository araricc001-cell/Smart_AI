import React from 'react'
import App from '../../App';

function Navbar() {
  return (
    <div>   
    {/* Navigation */}
  <header class="navbar">
    <div class="logo">COZA <span>STORE</span></div>
    <nav>
      <ul class="nav-links">
        <li><a href="#" class="active">Home</a></li>
        <li><a href="SHOP.HTML">Shop</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
     <div class="icons">
      <a href="#"><i class="bi bi-search"></i></a>
      <a href="#"><i class="bi bi-cart"></i></a>
      <a href="#"><i class="bi bi-heart"></i></a>
    </div>
  </header></div>
  )
}

export default Navbar