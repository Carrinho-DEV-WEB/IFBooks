<script setup></script>


<template>
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-left">
          <h3>IFBooks</h3>
          <div class="social-icons">
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
          </div>
        </div>
  
        <div class="footer-right">
          <h3>Contato</h3>
          <p><i class="fa-solid fa-phone"></i> +55 47 4004-5263</p>
          <p><i class="fa-regular fa-clock"></i> 8h às 23h - Seg a Sex</p>
          <p><i class="fa-regular fa-envelope"></i> contato@ifbooks.com</p>
          <img src="/public/images/waysToPay.png" alt="Formas de pagamento" class="payments" />
        </div>
      </div>
  
      <div class="footer-bottom">
        <p>© Alguns direitos reservados. IFBooks 2025.</p>
      </div>
    </footer>
  </template>
    
  <style scoped>
  p, h3{
    color: white;
  }
  .footer {
    background-color: #27AE60;
    padding: 40px 20px 20px;
  }
  
  .footer-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: auto;
  }
  
  .footer-left h3 {
    margin-bottom: 20px;
  }
  
  .social-icons a {
    margin-right: 15px;
    font-size: 1.6em;
    color: white;
    text-decoration: none;
    transition: .5s;
  }
  
  .social-icons a:hover{
    color: #c9c9c9;
  } 

  .footer-right h3{
    margin-bottom: 20px;
    font-weight: bold;
  }

  .footer-right p {
    margin: 20px 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .payments {
    margin-top: 10px;
    height: 30px;
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 30px;
    font-size: 14px;
    border-top: 2px solid #ffff;
    padding: 20px;
  }
  </style>