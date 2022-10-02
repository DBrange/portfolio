const d = document;

// Nombramos las variables.
const $images = d.querySelectorAll('main img');
const overlay = d.querySelector('.overlay');
const $overlayimg = d.querySelector('.overlay img');
const $overlayText = d.querySelector('.text-box p');
let position = 0;

// Seleccionamos la imagen que aparecera en el overlay.
$images.forEach(el => {
  el.addEventListener('click', e => {
    const route = el.getAttribute('src');
    
    overlay.classList.add('active');
    $overlayimg.src = route
    position = Array.from($images).indexOf(el);
    $overlayText.textContent = el.dataset.description; 
    
  });
});

// Colocamos la funcionalidad del boton para ver la imagen previa.
const $prevBtn = d.querySelector(".bxs-chevron-left");

$prevBtn.addEventListener('click', e => {
  if (position === 0) {
    position = $images.length - 1;
    $overlayimg.src = $images[position].src;
    $overlayText.textContent = "";
    $overlayText.textContent = $images[position].dataset.description;

  } else {
    $overlayimg.src = $images[position - 1].src
    position--
    $overlayText.textContent = "";
    $overlayText.textContent = $images[position].dataset.description;
  };
});

// Colocamos la funcionalidad del boton para ver la imagen siguiente.
const $nextBtn = d.querySelector(".bxs-chevron-right");

$nextBtn.addEventListener('click', e => {
  if (position === $images.length - 1) {
    position = 0;
    $overlayimg.src = $images[position].src;
    $overlayText.textContent = "";
    $overlayText.textContent = $images[position].dataset.description;
  } else {
    $overlayimg.src = $images[position + 1].src;
    position++;
    $overlayText.textContent = "";
    $overlayText.textContent = $images[position].dataset.description;
  };
});

// Colocamos la funcionalidad del boton para cerrar el overlay.
const $closeOverlay = d.querySelector(".bx-x");

$closeOverlay.addEventListener('click', e => {
  overlay.classList.remove("active");
});


// Le damos utilidad a las opciones de busqueda predeterminadas.
const searchOptions = d.querySelectorAll(".search-options a");

searchOptions.forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.textContent === 'All') {
      searchOptions.forEach(el => el.classList.remove('active'));
      el.classList.add('active');
      $images.forEach(el => el.classList.remove('hidden'));
    };
    if (e.target.textContent === 'Nature') {
      searchImages(el, 'nature')
    };
    if (e.target.textContent === 'Foods') {
      searchImages(el, 'foods')
    };
    if (e.target.textContent === 'People') {
      searchImages(el, 'people')
    };
    if (e.target.textContent === 'Animals') {
      searchImages(el, 'animals')
    };
  });
});

// Validamos la opcion seleccionada para poder filtrar las imagenes.
const searchImages = (el, data) => {
  searchOptions.forEach((el) => el.classList.remove("active"));
  el.classList.add("active");
  $images.forEach((el) => {
    el.classList.remove("hidden");
    if (el.dataset.option !== `${data}`) {
      el.classList.add("hidden");
    };
  });
};

// Validamos el texto ingresado para poder filtrar las imagenes.
const search = d.getElementById('search');

search.addEventListener('keyup', e => {
  const value = e.target.value.toLowerCase();

  console.log(value)
  $images.forEach(el => {
    if (value === el.dataset.option) {
      searchImagesInput(el, value)
    };
  });
});

const searchImagesInput = (el, data) => { 
  searchOptions.forEach((el) => el.classList.remove("active"));
  el.classList.add("active");
  $images.forEach((el) => {
    el.classList.remove("hidden");
    if (el.dataset.option !== `${data}`) {
      el.classList.add("hidden");
    };
  });
}