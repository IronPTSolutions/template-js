

onClickAddBtn();

function onClickAddBtn() {
  //var message = document.querySelector('[name="message"]').value;
  //var src = document.querySelector('[name="image"]').value;;

  var box = buildBox('Content', 'https://via.placeholder.com/350x150');
  addBox(box);
}

function addBox(box) {
  var boxContainer = document.querySelector('.box-container');
  boxContainer.appendChild(box);
}

function buildBox(message, src, icons) {
  var box = document.querySelector('#templates > .box').cloneNode(true);
  
  box.querySelector('.box-body > p').innerText = message;
  box.querySelector('.box-header > img').setAttribute('src', src);
  
  box.querySelector('.box-header > .delete-box').addEventListener('click', onClickDeleteBox);

  
  //box.querySelector('.box-header > .icon-1').innerText = icons[0];
  //box.querySelector('.box-header > .icon-2').innerText = icons[1];
  //box.querySelector('.box-header > .icon-3').innerText = icons[2];
  
  return box;
}

function onClickDeleteBox(event) {
  var deleteBtn = event.target;
  var box = deleteBtn.parentNode.parentNode;
  
  var boxContainer = document.querySelector('.box-container');
  boxContainer.removeChild(box);
}


