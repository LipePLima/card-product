const moreLess = document.querySelectorAll('.quantify__btn');

moreLess.forEach( btn => {
     btn.addEventListener('click', () => {
          const span  = document.querySelector('.quantify__num');
          let numSpan = parseInt(span.textContent);

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
})