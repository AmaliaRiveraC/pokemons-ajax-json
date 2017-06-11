 var plantillaPokemons ='<div class="col s6 m3">'+
  '<div class="card">'+
  '<div class= "card-content center-align">'+
  '<img class="responsive-img center" src="assets/img/__nombreImagen__.png">'+
  '<h6 data-url="http://pokeapi.co/api/v2/pokemon/__indice__/">__nombre__</h6>'+
  '</div>'+
  '</div>'+
  '</div>';

var cargarPagina = function() {
  $(".btn-floating").sideNav();
  $.getJSON("http://pokeapi.co/api/v2/pokemon/",
  function (response) {
    var pokemons = response.results;
    crearPokemons(pokemons);
  });
};



function crearPokemons(pokemons) {
  var plantillaFinal = " ";
  var nuevaImagen = $(".responsive-img")
  


  $(pokemons).each(function (i, pokemon) {
    plantillaFinal += plantillaPokemons
        .replace("__nombre__", pokemon.name)
        .replace("__nombreImagen__", pokemon.name)
        .replace("__indice__", i)
    });

  $("#pokemons").html(plantillaFinal);

}

var plantillaModal = 
  '<div id="modal1" class="modal">' + 
    '<div class="modal-content">' +
      '<h4>__nombre__</h4>' +
      '<img class="responsive-img center" src="assets/img/__nombreImagen__.png">' +
      '<p>Color: __color__</p>' +
      '<p>'
    '</div>' +
    '<div class="modal-footer">' +
      '<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>' +
    '</div>' +
  '</div>';

var abrirModal = function (e) {
  e.preventDefault();
  $(".modal").modal();
  var url = $(this).data("url");
  console.log($(this).data("url"));
  $.getJSON(url ,
  function (response) {
    var pokemon = response.results;
    crearModalPokemons(pokemons);
  });
};

function crearModalPokemons(pokemons) {
  var plantillaModalDefinitiva = " ";
  var nuevaImagen = $(".responsive-img")
  


  $(pokemons).each(function (i, pokemon) {
    plantillaFinal += plantillaPokemons
        .replace("__nombre__", pokemon.name)
        .replace("__nombreImagen__", pokemon.name)
        .replace("__indice__", i)
    });

  $("#pokemons").html(plantillaFinal);
};

  

 $(document).on("click", ".card", abrirModal);
 $(document).ready(cargarPagina);