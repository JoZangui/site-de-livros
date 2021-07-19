// =============== dropdown menu ====================
// vars
const topNav = document.getElementById('top-nav')
const profileImage = document.getElementById('profile-image')
const dropDownMenu= document.getElementById('dropdown-user-info')

dropDownMenu.style.display = 'none'

profileImage.addEventListener('click', function() {
    if (dropDownMenu.style.display === 'none') {
        dropDownMenu.style.display = 'block';
    }else {
        dropDownMenu.style.display = 'none';
    }
})

// EN: Hides the menu when scrolling down
// -----------------------------------------------
// PT: oculta o menu ao fazer uma rolagem pra baixo
window.addEventListener('scroll', function() {
    if (window.scroll.value != 0) {
        dropDownMenu.style.display = "none";
    }
})







// ================= slicing texts ===================
// vars
const bookTitle = document.getElementsByClassName('title-text');

const bookOwnerUsername = document.getElementsByClassName('owner-username');

const commentIcon = document.getElementsByClassName('fa-comment-alt');


function slice_text(element, range) {

    for (let i = 0; i < element.length; i++) {
        // EN: if the title has more than the number of characters specified in "range" then we cut from the 1st character to the character in the position of "range"
        // -----------------------------------------
        // PT: se o título tiver mais do que o número de caracteres especificado em "range" então cortamos desde o 1º cartacter até o caracter na posição de "range"
        if (element[i].innerText.length > range) {
            element[i].text = element[i].text.slice(0, range) + '...';
        }
    }
}

// EN: slice "title" with more than 14 characters
// ----------------------------------------------
// PT: recorta "título" com mais de 14 caracteres
slice_text(bookTitle, 16);

// EN: slice "username" with more than 9 characters;
// ----------------------------------------------
// PT: recorta "nome de usuário" com mais de 9 caracteres
slice_text(bookOwnerUsername, 9);

// EN: change the comment icon by hovering or removing the mouse over the icon
// ----------------------------------------------------------------
// PT: troca o icone de comentário ao passar ou ao retirar o mouse
for (let i = 0; i < commentIcon.length; i++) {
    commentIcon[i].addEventListener('mouseover', function() {
        commentIcon[i].className = "fas fa-comment-alt"
    });
    commentIcon[i].addEventListener('mouseout', function() {
        commentIcon[i].className = "far fa-comment-alt"
    });
}


// ================= close-message-bar ===================
// vars
const closeMessageBarButton = document.getElementById('close-message-bar-button');
const messageBar = document.getElementById('message-bar');

closeMessageBarButton.addEventListener('click', function() {
    if (messageBar.style.display !== 'none') {
        messageBar.style.display = 'none';
    }
});