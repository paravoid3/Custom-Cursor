const cursor = document.querySelector('.cursor');
const navItems = document.querySelectorAll('.nav-link');

document.body.addEventListener('mousemove', (e) => {
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + 'px';
});

navItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add("animate");
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove("animate");
  });
});