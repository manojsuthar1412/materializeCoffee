$(document).ready(function(){
  $('.modal').modal();
  $('.sidenav').sidenav();
  $('.slider').slider({full_width: true});
  $('.parallax').parallax();
  $('.myreviews').carousel({
    numVisible: 8,
    shift: 55,
    padding: 20,
  });
});

function toggleModal() {
  var instance = M.Modal.getInstance($('#modal2'));
  instance.open();
}
