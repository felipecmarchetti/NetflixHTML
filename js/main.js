/* Fundo preto barra de navegação topo quando scrolla pra baixo */
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
   //console.log(scroll);
  if (scroll >= 50) {
      //console.log('a');
      $(".container").addClass("scrolled");
  } else {
      //console.log('a');
      $(".container").removeClass("scrolled");
  }
});