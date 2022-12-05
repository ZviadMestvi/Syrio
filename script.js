const mainLogo = document.querySelector('.mainLogo');
const menuBtn = document.querySelector('.menuBtn');
const dropdownNav = document.querySelector('.dropdown');
const accessoriesNav = document.getElementById('accessoriesNav');
const featuresNav = document.getElementById('featuresNav');
const pricingNav = document.getElementById('pricingNav');
const accessoriesSection = document.getElementById('s3');
const featuresSection = document.getElementById('s4');
const pricingSection = document.getElementById('s8');

const firstTabBtn = document.querySelector('#firstTabBtn');
const secondTabBtn = document.querySelector('#secondTabBtn');
const thirdTabBtn = document.querySelector('#thirdTabBtn');
const firstTab = document.querySelector('.firstTab');
const secondTab = document.querySelector('.secondTab');
const thirdTab = document.querySelector('.thirdTab');

const firstSizeVersion = document.querySelector('#s8firstVersion');
const secondSizeVersion = document.querySelector('#s8secondVersion');
const thirdSizeVersion = document.querySelector('#s8thirdVersion');
const fourthSizeVersion = document.querySelector('#s8fourthVersion');
const firstSizeVersionBtn = document.querySelector('#firstSize');
const secondSizeVersionBtn = document.querySelector('#secondSize');
const thirdSizeVersionBtn = document.querySelector('#thirdSize');
const fourthSizeVersionBtn = document.querySelector('#fourthSize');

const ACCESSORIES_TOP_POSITION = accessoriesSection.getBoundingClientRect().top;
const FEATURES_TOP_POSITION = featuresSection.getBoundingClientRect().top;
const PRICING_TOP_POSITION = pricingSection.getBoundingClientRect().top;

const styleNav = function () {
  const windowY = window.scrollY;

  if (windowY > ACCESSORIES_TOP_POSITION && windowY < FEATURES_TOP_POSITION) {
    featuresNav.classList.remove('activeNavLink');
    pricingNav.classList.remove('activeNavLink');
    accessoriesNav.classList.add('activeNavLink');
    return;
  }

  if (windowY > FEATURES_TOP_POSITION && windowY < PRICING_TOP_POSITION) {
    accessoriesNav.classList.remove('activeNavLink');
    pricingNav.classList.remove('activeNavLink');
    featuresNav.classList.add('activeNavLink');
    return;
  }

  if (windowY > PRICING_TOP_POSITION) {
    accessoriesNav.classList.remove('activeNavLink');
    featuresNav.classList.remove('activeNavLink');
    pricingNav.classList.add('activeNavLink');
    return;
  }

  accessoriesNav.classList.remove('activeNavLink');
  featuresNav.classList.remove('activeNavLink');
  pricingNav.classList.remove('activeNavLink');
};

const changeTab = function (e) {
  const label = e.target.ariaLabel;

  if (label === 'tab1Btn') {
    firstTab.classList.add('active');
    secondTab.classList.remove('active');
    thirdTab.classList.remove('active');

    firstTabBtn.classList.add('active');
    secondTabBtn.classList.remove('active');
    thirdTabBtn.classList.remove('active');
  }
  if (label === 'tab2Btn') {
    firstTab.classList.remove('active');
    secondTab.classList.add('active');
    thirdTab.classList.remove('active');

    firstTabBtn.classList.remove('active');
    secondTabBtn.classList.add('active');
    thirdTabBtn.classList.remove('active');
  }
  if (label === 'tab3Btn') {
    firstTab.classList.remove('active');
    secondTab.classList.remove('active');
    thirdTab.classList.add('active');

    firstTabBtn.classList.remove('active');
    secondTabBtn.classList.remove('active');
    thirdTabBtn.classList.add('active');
  }
};

const changeSizeVersion = function (e) {
  const size = e.target.innerText;

  if (size === '64GB') {
    firstSizeVersion.classList.add('active');
    secondSizeVersion.classList.remove('active');
    thirdSizeVersion.classList.remove('active');
    fourthSizeVersion.classList.remove('active');

    firstSizeVersionBtn.classList.add('s8ActiveBtn');
    secondSizeVersionBtn.classList.remove('s8ActiveBtn');
    thirdSizeVersionBtn.classList.remove('s8ActiveBtn');
    fourthSizeVersionBtn.classList.remove('s8ActiveBtn');
  }
  if (size === '128GB') {
    firstSizeVersion.classList.remove('active');
    secondSizeVersion.classList.add('active');
    thirdSizeVersion.classList.remove('active');
    fourthSizeVersion.classList.remove('active');

    firstSizeVersionBtn.classList.remove('s8ActiveBtn');
    secondSizeVersionBtn.classList.add('s8ActiveBtn');
    thirdSizeVersionBtn.classList.remove('s8ActiveBtn');
    fourthSizeVersionBtn.classList.remove('s8ActiveBtn');
  }
  if (size === '256GB') {
    firstSizeVersion.classList.remove('active');
    secondSizeVersion.classList.remove('active');
    thirdSizeVersion.classList.add('active');
    fourthSizeVersion.classList.remove('active');

    firstSizeVersionBtn.classList.remove('s8ActiveBtn');
    secondSizeVersionBtn.classList.remove('s8ActiveBtn');
    thirdSizeVersionBtn.classList.add('s8ActiveBtn');
    fourthSizeVersionBtn.classList.remove('s8ActiveBtn');
  }
  if (size === '512GB') {
    firstSizeVersion.classList.remove('active');
    secondSizeVersion.classList.remove('active');
    thirdSizeVersion.classList.remove('active');
    fourthSizeVersion.classList.add('active');

    firstSizeVersionBtn.classList.remove('s8ActiveBtn');
    secondSizeVersionBtn.classList.remove('s8ActiveBtn');
    thirdSizeVersionBtn.classList.remove('s8ActiveBtn');
    fourthSizeVersionBtn.classList.add('s8ActiveBtn');
  }
};

const toggleDropdown = function () {
  dropdownNav.classList.toggle('active');
};

document.addEventListener('scroll', styleNav);

firstTabBtn.addEventListener('click', changeTab);
secondTabBtn.addEventListener('click', changeTab);
thirdTabBtn.addEventListener('click', changeTab);

firstSizeVersionBtn.addEventListener('click', changeSizeVersion);
secondSizeVersionBtn.addEventListener('click', changeSizeVersion);
thirdSizeVersionBtn.addEventListener('click', changeSizeVersion);
fourthSizeVersionBtn.addEventListener('click', changeSizeVersion);

menuBtn.addEventListener('click', toggleDropdown);
mainLogo.addEventListener('click', () => location.reload());
