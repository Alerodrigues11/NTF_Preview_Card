const checkbox = document.querySelector ('.checkbox');
const body = document.querySelector ('.dark__mode--body');
const main = document.querySelector ('.main');
const title = document.querySelector ('.main__description--title');
const text = document.querySelector ('.main__description--text');
const nameCreator = document.querySelector ('.main__creator--name');
const textCreator = document.querySelector ('.main__creator--text');



checkbox.onclick = function () {
    this.classList.toggle('active');
    body.classList.toggle('active');
    main.classList.toggle('active');
    title.classList.toggle('active');
    text.classList.toggle('active');
    nameCreator.classList.toggle('active');
    textCreator.classList.toggle('active');
}