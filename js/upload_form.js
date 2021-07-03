var selectContainer, selectTag, selectedOptionDiv, optionsContainerDiv, OptionDiv;
/*look for any elements with the class "select-container":*/
selectContainer = document.getElementsByClassName("select-container");

for (let i = 0; i < selectContainer.length; i++) {
  selectTag = selectContainer[i].getElementsByTagName("select")[0]; // HTML select tag: <select>

  /*for each element, create a new DIV that will act as the selected item:*/
  selectedOptionDiv = document.createElement("DIV");
  selectedOptionDiv.setAttribute("class", "select-selected");
  selectedOptionDiv.innerHTML = selectTag.options[selectTag.selectedIndex].innerHTML;
  selectContainer[i].appendChild(selectedOptionDiv);

  /*for each element, create a new DIV that will contain the option list:*/
  optionsContainerDiv = document.createElement("DIV");
  optionsContainerDiv.setAttribute("class", "select-items select-hide");

  for (let j = 1; j < selectTag.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    OptionDiv = document.createElement("DIV");
    OptionDiv.innerHTML = selectTag.options[j].innerHTML;
    OptionDiv.addEventListener("click", function(e) {
      /*when an item is clicked, update the original select box,
      and the selected item:*/
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
  var x, y, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (let i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (let i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);