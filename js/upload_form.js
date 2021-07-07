// ========================= select tag ==============================

var selectContainer, selectTag, selectedOptionDiv, optionsContainerDiv, OptionDiv;
/*
  EN: look for any elements with the class "select-container"
  PT: procure por algum elementos com a classe "select-container"
*/
selectContainer = document.getElementsByClassName("select-container");

for (let i = 0; i < selectContainer.length; i++) {
  selectTag = selectContainer[i].getElementsByTagName("select")[0]; // HTML select tag: <select>

  /*
    EN: for each element, create a new DIV that will act as the selected item
    PT: para cada elemento, cria uma novo DIV que atuará como o item selecionado
  */
  selectedOptionDiv = document.createElement("DIV");
  selectedOptionDiv.setAttribute("class", "select-selected");
  selectedOptionDiv.innerHTML = selectTag.options[selectTag.selectedIndex].innerHTML;
  selectContainer[i].appendChild(selectedOptionDiv);

  /*
    EN: for each element, create a new DIV that will contain the option list
    PT: para cada elemento, cria uma novo DIV que conterá a lista de opções
  */
  optionsContainerDiv = document.createElement("DIV");
  optionsContainerDiv.setAttribute("class", "select-items select-hide");

  for (let j = 1; j < selectTag.length; j++) {
    /*
      EN: for each option in the original select element,
    create a new DIV that will act as an option item
      PT: para cada opção no elemento de seleção original,
    cria um novo DIV que atuará como um item de opção
    */
    OptionDiv = document.createElement("DIV");
    OptionDiv.innerHTML = selectTag.options[j].innerHTML;
    OptionDiv.addEventListener("click", function(e) {
      /*
        EN: when an item is clicked, update the original select box,
      and the selected item
        PT: quando um item é clicado, atualize a caixa de seleção original,
      e o item selecionado
      */
      for (let i = 0; i < selectTag.length; i++) {
        if (selectTag.options[i].innerHTML == this.innerHTML) {
          selectTag.selectedIndex = i;
          selectedOptionDiv.innerHTML = this.innerHTML;
          sameAsSelected = this.parentNode.getElementsByClassName("same-as-selected");
          for (let k = 0; k < sameAsSelected.length; k++) {
            sameAsSelected[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      selectedOptionDiv.click();
    });
    optionsContainerDiv.appendChild(OptionDiv);
  }
  selectContainer[i].appendChild(optionsContainerDiv);
  selectedOptionDiv.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var optionsContainerDiv, selectedOptionDiv, arrNo = [];
  optionsContainerDiv = document.getElementsByClassName("select-items");
  selectedOptionDiv = document.getElementsByClassName("select-selected");
  for (let i = 0; i < selectedOptionDiv.length; i++) {
    if (elmnt == selectedOptionDiv[i]) {
      arrNo.push(i)
    } else {
      selectedOptionDiv[i].classList.remove("select-arrow-active");
    }
  }
  for (let i = 0; i < optionsContainerDiv.length; i++) {
    if (arrNo.indexOf(i)) {
      optionsContainerDiv[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


// ==================================== CHANGE IMAGE ===================================
const uploadButton = document.getElementById('upload_button');
const img = document.getElementById('cover-image')

uploadButton.addEventListener('change', function() {
  img.src = this.value;
});