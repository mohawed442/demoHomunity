
//  taps
  let tabs = document.querySelectorAll('.tab');
  let products = document.querySelectorAll('.product');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {     
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      let category = tab.dataset.category;

      products.forEach(product => {
        if (product.dataset.category === category) {
          product.classList.add('show');
        } else {
          product.classList.remove('show');
        }
      });

    });
  });
// Pagination
let pages = document.querySelectorAll('.page-num');

pages.forEach(page => {
  page.addEventListener('click', () => {
    pages.forEach(p => p.classList.remove('active'));
    page.classList.add('active');
  });
});
//Israa
let btn = document.querySelector(".start-btn");

btn.addEventListener("click", () => {
  window.scrollBy({
    top: 1000,
    behavior: "smooth"
  });
});
//nada

const viewAllBtnbtn 
= document.getElementById('viewAllBtn');

viewAllBtnbtn.addEventListener('click', function() {
        
        alert('تم الضغط على الزر! سيتم عرض جميع المنتجات قريباً.');

        this.style.backgroundColor = '#4A5A4D';
        
        console.log('User clicked View All button');
});
viewAllBtnbtn.onclick = function() {
    this.innerHTML = "LOADING...";
    setTimeout(() => {
        this.innerHTML = "VIEW ALL";
},2000);
};