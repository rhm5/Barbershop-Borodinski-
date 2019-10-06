'use strict';



var nav = document.querySelector('.nav'),
  navToggle = nav.querySelector('.nav__toggle');
nav.classList.remove('nav--nojs');
navToggle.addEventListener('click', () => {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.remove('nav--opened');
    nav.classList.add('nav--closed');
  }
});



var popUp = document.querySelector('.popup'),
  btnOpen = document.querySelector('.nav__user-link'),
  btnClose = document.querySelector('.login-form__btn--close'),
  form = popUp.querySelector('.popup__form'),
  login = form.querySelector('.popup__login'),
  password = form.querySelector('.popup__password'),
  storage = localStorage.getItem('login');
btnOpen.addEventListener('click', (event) => {
  event.preventDefault();
  popUp.classList.toggle('popup--opened');
  nav.classList.remove('nav--opened');
  nav.classList.add('nav--closed');
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});
btnClose.addEventListener('click', () => {
  if (popUp.classList.contains('popup--opened')) {
    popUp.classList.remove('popup--opened');
    popUp.classList.remove('popup--error');
  }
});
window.addEventListener('keydown', (event) => {
  if (event.keyCode == 27) {
    if (popUp.classList.contains('popup--opened')) {
      popUp.classList.remove('popup--opened');
      popUp.classList.remove('popup--error');
    }
  }
});
form.addEventListener('submit', (event) => {
  if (!login.value || !password.value) {
    popUp.classList.add('popup--error');
    event.preventDefault();
  } else {
    localStorage.setItem('login', login.value);
  }
});



var overlayOpen = document.querySelector('.nav__user-link');
var overlayPopup = document.querySelector('.popup__overlay');
var overlayClose = document.querySelector('.login-form__btn--close');

overlayOpen.addEventListener('click', (event) => {
  event.preventDefault();
  overlayPopup.classList.add('popup__overlay--show');
});
overlayClose.addEventListener('click', () => {
  if (overlayPopup.classList.contains('popup__overlay--show')) {
    overlayPopup.classList.remove('popup__overlay--show');
  }
});
window.addEventListener('keydown', (event) => {
  if (event.keyCode === 27) {
    if (overlayPopup.classList.contains('popup__overlay--show')) {
      overlayPopup.classList.remove('popup__overlay--show');
    }
  }
});
