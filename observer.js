let allLinks = document.querySelectorAll('div[class="nav__part"] a');
let sections = document.querySelectorAll('section');

const options = {
  // rootMargin: '-150px',
  treshold: 1.0
};

const callback = (entries, observer) => {
  entries.forEach( entry => {
      console.log(entry.target.parentNode.id + " cut " + entry.isIntersecting);
      if( entry.isIntersecting){
        let link = searchMatchingLink('#' + entry.target.parentNode.id);
        activate(link);
      }

  })
}

let observer = new IntersectionObserver(callback, options);

sections.forEach( section => {
  observer.observe(section.getElementsByTagName('p')[0]);
})

//functie die de class part__title--active verwijderd
const deleteActive = () => {
  allLinks.forEach( (link) => {
    if( link.classList = 'part__title part__title--active'){
      link.classList.remove('part__title--active')
    }
  });
}

//functie die de class 'part__title--active' toevoegd
const activate = (element) => {
  deleteActive();
  element.classList.add('part__title--active');
}

//functie die deze code is geschreven door jochem de wit
allLinks.forEach( (link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    activate(e.target);
    window.location = e.target.href;
  })
})

const searchMatchingLink = (id) => {
  let link = document.querySelector('nav a[href="' + id + '"]');
  return link;
}
