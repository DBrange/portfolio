// Data from all projects.
const $projectsArea = document.querySelector('.projects__all');

$allProjects.forEach(el => {
  const divTag = document.createElement('div');
  divTag.classList.add('box-img');
  $projectsArea.appendChild(divTag);

  const imgTag = document.createElement('img');
  imgTag.src = `./img/${el.src}.jpg`;
  imgTag.classList.add('blur')
  divTag.appendChild(imgTag);

  const h4Tag = document.createElement('h4');
  h4Tag.textContent = el.name;
  divTag.appendChild(h4Tag);

  const aTag = document.createElement('a');
  aTag.href = `./pages/${el.href}`;
  aTag.target = '_blank';
  aTag.classList.add("start-app");
  aTag.id = "start-app";
  aTag.textContent = 'Comenzar'
  divTag.appendChild(aTag);
});

// We change the classes of the hamburger menu.
const $hamburger = document.querySelector('.hamburger');
let menuOpen = false;
$hamburger.addEventListener('click', () => {
  if(!menuOpen) {
    $hamburger.classList.remove('is-active');
    menuOpen = true;
  } else {
    $hamburger.classList.add('is-active');
    menuOpen = false;
  }
  const $activatePanel = document.querySelector('nav ul');
  $activatePanel.classList.toggle('is-active');
  $hamburger.classList.toggle('is-active');
});

// We change the icon in the Projects window.
const $projectsOpen = document.querySelector('.section-projects span i');

$projectsOpen.addEventListener('click', (e) => {
  $projectsArea.classList.toggle('is-active');
  if(e.target.classList.contains('fa-angles-down')){
      e.target.classList.remove("fa-angles-down");
      e.target.classList.add("fa-angles-up");
  } else {
      e.target.classList.remove("fa-angles-up");
      e.target.classList.add("fa-angles-down");
  }
});

// Waiting notice for the form submission
const $submitForm = document.querySelector(".btn-box h6");
const $formBtn = document.querySelector("#btn-form");

$formBtn.addEventListener('submit', () => $submitForm.style.opacity = '1');

// We changed the classes to use the Black Mode.
const $chk = document.getElementById('chk');

$chk.addEventListener('change', (e) => {
  const $headerDark = document.querySelector('.header');
  const $sectionDark = document.querySelectorAll('.section');
  const $titleDark = document.querySelector('.title a');
  const $navBgdDark = document.querySelectorAll('nav ul');
  const $navDark = document.querySelectorAll('.box-nav a')
  const $startAppDark = document.querySelectorAll('#start-app');
  const $labelDark = document.querySelector('.label');
  const $ballDark = document.querySelector('.label .ball');
  const $iconDark = document.querySelectorAll('.fa-brands');
  const $iconDarkBx = document.querySelectorAll(".bx");
  const $iconDownDark = document.querySelector('.fa-angles-down');
  const $iconUpDark = document.querySelector('.fa-angles-up');
  const $footerDark = document.querySelector('.footer');
  const $hamburgerDark = document.querySelector('.hamburger');
  const $downloadCV = document.querySelector('li button');

  $sectionDark.forEach(el => el.classList.toggle('dark'));
  $navBgdDark.forEach(el => el.classList.toggle('dark'));
  $startAppDark.forEach(el => el.classList.toggle('dark'));
  $iconDark.forEach(el => el.classList.toggle('dark'));
  $iconDarkBx.forEach(el => el.classList.toggle('dark'));
  document.body.classList.toggle('dark');
  $submitForm.classList.toggle('dark');
  $headerDark.classList.toggle('dark');
  $titleDark.classList.toggle('dark');
  $labelDark.classList.toggle('dark');
  $ballDark.classList.toggle('dark');
  $formBtn.classList.toggle('dark');
  $footerDark.classList.toggle('dark');
  $hamburgerDark.classList.toggle('dark');
  $downloadCV.classList.toggle('dark');
  $navDark.forEach(el => el.classList.toggle('dark'));
  if($iconDownDark.classList.contains('fa-angles-down')){
      $iconDownDark.classList.toggle('dark');
  } else {
      $iconUpDark.classList.toggle('dark');    
  }
});

// As we scroll on the page, it indicates where we are on the page
const scrollSpy = () => {
  const $sections = document.querySelectorAll("section[data-scroll-spy]");
  const cb = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (document.body.classList.contains('dark')) {
        document.querySelector(`a[data-scroll-spy][href='#${id}']`).parentElement.classList.remove("active");
        if (entry.isIntersecting) {
          document.querySelector(`a[data-scroll-spy][href='#${id}']`).parentElement.classList.add("active-dark");
        } else {
          document
            .querySelector(`a[data-scroll-spy][href='#${id}']`)
            .parentElement.classList.remove("active-dark");
        }
      } else {
        document.querySelector(`a[data-scroll-spy][href='#${id}']`).parentElement.classList.remove("active-dark");
        if (entry.isIntersecting) {
          document.querySelector(`a[data-scroll-spy][href='#${id}']`).parentElement.classList.add("active");
        } else {
          document.querySelector(`a[data-scroll-spy][href='#${id}']`).parentElement.classList.remove("active");
        };
      };
    });
  };

  const observer = new IntersectionObserver(cb, {
    threshold: [0.8, 1],
  });

  $sections.forEach((el) => observer.observe(el));
};

document.addEventListener('DOMContentLoaded', scrollSpy);




