const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');

if (toggle) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

const forms = document.querySelectorAll('form[data-static]');
forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Talebiniz alındı. Kısa sürede dönüş yapacağız.');
    form.reset();
  });
});
