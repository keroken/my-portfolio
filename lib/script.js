function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');
  var navList = document.getElementById('nav-list');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });

  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });

  navList.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
}
toggleNav();
