
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

