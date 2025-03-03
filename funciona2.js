//abrir y cerrar la sidebar
const bton = document.querySelector('.boton');
bton.addEventListener('click',function(){
    document.getElementById('sidebar').classList.toggle('active');
});
//ventana modal de comentarios
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btnabrir");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let jajaja="";
    puntos.forEach(puntito=>{
        jajaja +=`<li class="a" onclick="draw_route_map(${puntito.lat},${puntito.lng})">${puntito.name}</li>`;
    })
    document.getElementById("all-list").innerHTML=jajaja;
   
    
const inputField = document.querySelector('.chosen-value');//chosen-value
const dropdown = document.querySelector('.value-list');//value-list
const dropdownArray = [... document.querySelectorAll('.a')];//a
console.log(typeof dropdownArray)
dropdown.classList.add('open');
inputField.focus(); // Demo purposes only
let valueArray = [];
dropdownArray.forEach(item => {
  valueArray.push(item.textContent);
});

const closeDropdown = () => {
  dropdown.classList.remove('open');
}

inputField.addEventListener('input', () => {
  dropdown.classList.add('open');
  let inputValue = inputField.value.toLowerCase();
  let valueSubstring;
  if (inputValue.length > 0) {
    for (let j = 0; j < valueArray.length; j++) {
      if (!(inputValue.substring(0, inputValue.length) === valueArray[j].substring(0, inputValue.length).toLowerCase())) {
        dropdownArray[j].classList.add('closed');
      } else {
        dropdownArray[j].classList.remove('closed');
      }
    }
  } else {
    for (let i = 0; i < dropdownArray.length; i++) {
      dropdownArray[i].classList.remove('closed');
    }
  }
});

dropdownArray.forEach(item => {
  item.addEventListener('click', (evt) => {
    inputField.value = item.textContent;
    dropdownArray.forEach(dropdown => {
      dropdown.classList.add('closed');
    });
  });
})

inputField.addEventListener('focus', () => {
   inputField.placeholder = 'Busca un lugar';
   dropdown.classList.add('open');
   dropdownArray.forEach(dropdown => {
     dropdown.classList.remove('closed');
   });
});

inputField.addEventListener('blur', () => {
   inputField.placeholder = 'Busca un lugar';
  dropdown.classList.remove('open');
});

document.addEventListener('click', (evt) => {
  const isDropdown = dropdown.contains(evt.target);
  const isInput = inputField.contains(evt.target);
  if (!isDropdown && !isInput) {
    dropdown.classList.remove('open');
  }
});