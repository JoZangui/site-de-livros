// vars
let bookTitle = document.getElementsByClassName('title-text');

let bookOwnerUsername = document.getElementsByClassName('owner-username');

let commentIcon = document.getElementsByClassName('fa-comment-alt')

// EN: "for" for very long titles
// PT: "for" para percorrer todos os títulos
for (let i = 0; i < bookTitle.length; i++) {
    // se o título tiver mais de 14 caracteres então cortamos do 1º ao 14º cartacter
    if (bookTitle[i].innerText.length > 14) {
        bookTitle[i].text = bookTitle[i].text.slice(0, 14) + '...'
    }
}

for (let i = 0; i < bookOwnerUsername.length; i++) {
    // console.log('Username: ' + bookOwnerUsername[i].text + '; ' + 'Tamanho do nome: ' + bookOwnerUsername[i].text.length)
    if (bookOwnerUsername[i].innerText.length > 11) {
        bookOwnerUsername[i].text = bookOwnerUsername[i].text.slice(0, 9) + '...'
    }
}

for (let i = 0; i < commentIcon.length; i++) {
    commentIcon[i].addEventListener('mouseover', function() {
        commentIcon[i].className = "fas fa-comment-alt"
    })
    commentIcon[i].addEventListener('mouseout', function() {
        commentIcon[i].className = "far fa-comment-alt"
    })
}