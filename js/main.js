'use strict';
{

  const open = document.querySelectorAll('.open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');
  const order = document.getElementById('order');

  var my_loop = document.getElementsByClassName("myclass");

  for (var i = 0; i < open.length; i++) {
    var v = open[i];
  
    v.addEventListener('click', () => {
      modal.classList.remove('hidden');
      mask.classList.remove('hidden');
    });
  }

  close.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });
  mask.addEventListener('click', () => {
    close.click();
  });
}


const downbutton = document.getElementById('down');
const upbutton = document.getElementById('up');
const text = document.getElementById('textbox');
const reset = document.getElementById('reset');

downbutton.addEventListener('click', (event) => {
  if (text.value >= 1) {
    text.value--;
  }
});
upbutton.addEventListener('click', (event) => {
  text.value++;
})
reset.addEventListener('click', (event) => {
  text.value = 0;
})

