const mainLogo = document.querySelector('.mainLogo');
const menuBtn = document.querySelector('.menuBtn');
const dropdownNav = document.querySelector('.dropdown');
const accessoriesNav = document.getElementById('accessoriesNav');
const featuresNav = document.getElementById('featuresNav');
const pricingNav = document.getElementById('pricingNav');

const sections = document.querySelectorAll('section');
const sizeVersions = document.querySelectorAll('.s8ImageWrapper');
const sizeVersionBtns = document.querySelectorAll('.s8BtnsWrapper button');
const tabBtns = document.querySelectorAll('.tabBtn');
const tabs = document.querySelectorAll('.tab');

const styleNav = function () {
  let scrollY = window.scrollY;

  sections.forEach(s => {
    const sectionHeight = s.offsetHeight;
    const sectionTop = s.offsetTop;
    const sectionId = s.getAttribute('id');

    // If section with Id attribute doesn't exist exit function
    if (!sectionId) return;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav a[href*=${sectionId}]`)
        .classList.add('activeNavLink');
    } else {
      document
        .querySelector(`.nav a[href*=${sectionId}]`)
        .classList.remove('activeNavLink');
    }
  });
};

const changeTab = function (e) {
  const label = e.target.ariaLabel;

  tabBtns.forEach((btn, i) => {
    if (label === btn.ariaLabel) {
      btn.classList.add('activeBtn');
      tabs[i].classList.add('activeTab');
    } else {
      btn.classList.remove('activeBtn');
      tabs[i].classList.remove('activeTab');
    }
  });
};

const changeSizeVersion = function (e) {
  const size = e.target.innerText;

  sizeVersionBtns.forEach((btn, i) => {
    const sizeVersionId = sizeVersions[i].getAttribute('id');
    if (size === sizeVersionId) {
      btn.classList.add('s8ActiveBtn');
      sizeVersions[i].classList.add('active');
    } else {
      btn.classList.remove('s8ActiveBtn');
      sizeVersions[i].classList.remove('active');
    }
  });
};

const toggleDropdown = function () {
  dropdownNav.classList.toggle('active');
};

document.addEventListener('scroll', styleNav);
menuBtn.addEventListener('click', toggleDropdown);
mainLogo.addEventListener('click', () => location.reload());

tabBtns.forEach(btn => btn.addEventListener('click', changeTab));
sizeVersionBtns.forEach(btn =>
  btn.addEventListener('click', changeSizeVersion)
);
