var btnOpen = document.querySelector('.search-box__btn')

btnOpen.addEventListener('click', function () {
    this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus();
})