// vars
let bookTitle = document.getElementsByClassName('title-text');

let bookOwnerUsername = document.getElementsByClassName('owner-username');

let commentIcon = document.getElementsByClassName('fa-comment-alt')


function slice_text(element, range) {

    for (let i = 0; i < element.length; i++) {
        // EN: if the title has more than the number of characters specified in "range" then we cut from the 1st character to the character in the position of "range"

        // PT: se o título tiver mais do que o número de caracteres especificado em "range" então cortamos desde o 1º cartacter até o caracter na posição de "range"
        if (element[i].innerText.length > range) {
            element[i].text = element[i].text.slice(0, range) + '...'
        }
    }
}

// EN: slice "title" with more than 14 characters

// PT: recorta "título" com mais de 14 caracteres
slice_text(bookTitle, 16)

// EN: slice "username" with more than 11 characters;

// PT: recorta "nome de usuário" com mais de 9 caracteres
slice_text(bookOwnerUsername, 9)

for (let i = 0; i < commentIcon.length; i++) {
    commentIcon[i].addEventListener('mouseover', function() {
        commentIcon[i].className = "fas fa-comment-alt"
    })
    commentIcon[i].addEventListener('mouseout', function() {
        commentIcon[i].className = "far fa-comment-alt"
    })
}