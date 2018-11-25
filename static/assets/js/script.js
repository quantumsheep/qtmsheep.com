const selectSideMenuAnchor = hash => {
  document.querySelectorAll('.side-menu > a[href^="#"]').forEach(link => link.classList.remove('active'));

  const link = document.querySelector(`.side-menu > a[href="${hash}"]`);

  if (link) {
    link.classList.add('active');
  }
}

const setAnchor = () => document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const href = this.getAttribute('href');

    window.history.replaceState(null, document.title, href);

    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    });

    setTimeout(() => console.log('done'), 100);
  });
});

selectSideMenuAnchor(window.location.hash || "#home");
setAnchor();

const header = document.querySelector('header');

function defineHeaderOpacity(e) {
  const topClass = header.classList.contains('top');

  const maxTop = 50;

  if (window.scrollY < maxTop && !topClass) {
    header.classList.add('top');
  } else if (window.scrollY > maxTop && topClass) {
    header.classList.remove('top');
  }
}

defineHeaderOpacity();

window.addEventListener('scroll', defineHeaderOpacity);

window.addEventListener('scroll', function (e) {
  const sections = document.getElementsByTagName('section');
  const scrollPos = window.scrollY + 400;

  if (sections) {
    for (let i in sections) {
      const index = parseInt(i);

      const section = sections[index];
      const nextSection = sections[index + 1];

      if (nextSection) {
        if (scrollPos >= section.offsetTop && scrollPos < nextSection.offsetTop) {
          selectSideMenuAnchor(`#${section.id}`);
          break;
        }
      } else if (scrollPos >= section.offsetTop) {
        selectSideMenuAnchor(`#${section.id}`);
        break;
      }
    }
  }
}); 