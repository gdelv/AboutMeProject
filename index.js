$('div div').on('click', function() {
    $(this).toggleClass('show-description');
});

function showMessage() {
  alert('OMG');
}

function toggleDescription(eve) {
  eve.stopPropagation();
  console.log('event', eve);
  var element = document.getElementById(eve.target.id);
  console.log('element: ', element);
  element.parentNode.classList.add("show-description");
}
