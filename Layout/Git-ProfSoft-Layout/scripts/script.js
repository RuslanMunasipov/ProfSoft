window.onload = function() {
    let selectedLang = localStorage.getItem('selected_language')
    let buttonSelector = '.intro_lang_toggle_' + selectedLang
    let langButton = document.querySelector(`.intro_lang_buttons ${buttonSelector}`)
    langButton.classList.add('selected')
}

function selectLang(event, lang) {
    localStorage.setItem('selected_language', lang.toLowerCase())
    let langButtons = document.querySelectorAll(`.intro_lang_buttons button`)
    for (let button of langButtons) {
        button.classList.remove(`selected`)
    }
    event.target.classList.add('selected')
}