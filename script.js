const boxContainer = document.querySelector('.github__box-container');
const welcomeTextContainer = document.querySelector('.welcome__text-container');
const welcomeImgContainer = document.querySelector('.welcome__img-container');
const authorName = document.querySelector('.name__me');
const jobTitleContainers = document.querySelectorAll('.job-title');
const jobTitles = document.querySelectorAll('.job-title__text');
const projectsTitle = document.querySelector('.projects__title');
const phones = document.querySelectorAll('.project__phone');
const laptop = document.querySelector('.laptop');
const year = document.querySelector('.footer__copyright-year');
const nameMobileContainer = document.querySelector('.name-mobile');
const aboutSkills = document.querySelector('.about');
const scrollToTop = document.querySelector('.scroll-top');
const isMobile = window.matchMedia('(max-width: 1024px)').matches;

for (let i = 0; i < 369; i++) {
  const list = [
    0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166, 167,
    205, 206, 246, 247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169, 170, 210,
    211, 251, 252, 292, 293, 8, 9, 14, 15, 49, 50, 51, 90, 91, 92, 131, 132,
    133, 134, 172, 173, 213, 214, 254, 255, 295, 296, 175, 176, 217, 177, 218,
    259, 55, 56, 96, 97, 137, 138, 178, 179, 219, 220, 260, 261, 217, 218, 259,
    260, 261, 301, 302, 17, 18, 19, 58, 59, 60, 61, 99, 100, 102, 103, 140, 141,
    144, 181, 182, 185, 222, 223, 225, 226, 263, 264, 265, 266, 304, 305, 306,
    24, 25, 65, 66, 67, 106, 107, 108, 147, 148, 149, 150, 188, 189, 229, 230,
    270, 271, 311, 312, 67, 108, 149, 150, 191, 232, 192, 233, 274, 234, 275,
    316, 194, 235, 276, 154, 195, 236, 73, 114, 155, 33, 34, 74, 75, 115, 116,
    156, 157, 197, 198, 238, 239, 279, 280, 320, 321, 36, 37, 38, 39, 77, 78,
    79, 80, 118, 119, 159, 160, 161, 162, 200, 201, 202, 203, 241, 242, 282,
    283, 284, 285, 323, 324, 325, 326,
  ];
  const el = document.createElement('div');
  el.classList = list.includes(i) ? 'box active' : 'box';
  boxContainer.appendChild(el);
}
window.addEventListener('scroll', () => {
  const offsetY = window.scrollY;
  const scrollTop = aboutSkills.offsetTop;
  const isSectionReached = offsetY > scrollTop;
  welcomeImgContainer.style.transform = `translate(${offsetY * 0.4}px , ${
    offsetY * 0.8
  }px)`;

  if (!isMobile) {
    welcomeTextContainer.style.transform = `translateY(${offsetY * 0.2}px)`;
    authorName.style.transform = `translateX(${offsetY * 0.1}px)`;
    jobTitleContainers[0].style.backgroundPositionY = `${offsetY * 0.6}px`;
    jobTitles[0].style.transform = `translateX(calc(202vh - ${offsetY}px))`;
    jobTitleContainers[1].style.backgroundPositionY = `${-offsetY * 0.5}px`;
    jobTitles[1].style.transform = `translateX(calc(-300vh + ${offsetY}px))`;
    projectsTitle.style.transform = `translateY(calc(510vh - ${offsetY}px))`;
    phones[0].style.transform = `translateX(calc(600vh - ${offsetY}px))`;
    laptop.style.transform = `translateX(calc(-730vh + ${offsetY}px))`;
    phones[1].style.transform = `translateX(calc(890vh - ${offsetY}px))`;
  } else {
    if (!isSectionReached) {
      welcomeTextContainer.style.transform = `translateY(${offsetY * 0.8}px)`;
      nameMobileContainer.style.backgroundPositionY = `${offsetY * 0.6}px`;
    } else {
      welcomeImgContainer.style.transform = `none`;
    }
  }
});

const getYear = () => {
  year.textContent = new Date().getFullYear();
};
getYear();

const goToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};
scrollToTop.addEventListener('click', goToTop);
