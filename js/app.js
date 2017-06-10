 var plantillaPokemons ='<div class="col s6 m3">'+
  '<div class="card">'+
  '<div class= "card-content center-align">'+
  '<img class="responsive-img center" src="assets/img/__nombreImagen__.png">'+
  '<h6>__nombre__</h6>'+
  '</div>'+
  '</div>'+
  '</div>';

var cargarPagina = function() {
  $(".button-floating").sideNav();

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
    });

  $("#pokemons").html(plantillaFinal);

    

}

 $(document).ready(cargarPagina);