const moreLess = document.querySelectorAll('.quantify__btn');
const addBtn   = document.querySelector('.btn-buy');
const span  = document.querySelector('.quantify__num');
let numSpan = parseInt(span.textContent);

moreLess.forEach( btn => {
     btn.addEventListener('click', () => {
          if(btn.classList.contains('quantify__add')) {
               numSpan += 1
               span.textContent = numSpan
          } else {
               if(numSpan > 1) {
                    numSpan -= 1
                    span.textContent = numSpan
               }
          }
     })
});

addBtn.addEventListener('click', () => {
     alert(`${span.textContent} Gabrielle Essence Eau De Parfum adicionado(s) ao carrinho`)
})