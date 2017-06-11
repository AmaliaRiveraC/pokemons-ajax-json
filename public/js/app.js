 var plantillaPokemons = '<div class="col s6 m3">' +
     '<div class="card waves-effect" href="#modal1" data-url="http://pokeapi.co/api/v2/pokemon-species/__indice__/">' +
     '<div class= "card-content center-align">' +
     '<img class="responsive-img center" src="assets/img/__nombreImagen__.png">' +
     '<h6 class="pokemon" ">__nombre__</h6>' +
     '</div>' +
     '</div>' +
     '</div>';

 var cargarPagina = function () {
     $(".btn-floating").sideNav();
     $.getJSON("http://pokeapi.co/api/v2/pokemon/",
         function (response) {
             var pokemons = response.results;
             crearPokemons(pokemons);
         });
 };

 


 function crearPokemons(pokemons) {
     var plantillaFinal = " ";
     $(pokemons).each(function (i, pokemon) {
         plantillaFinal += plantillaPokemons
             .replace("__nombre__", pokemon.name)
             .replace("__nombreImagen__", pokemon.name)
             .replace("__indice__", i)
     });
     $("#pokemons").html(plantillaFinal);

 }

function ajaxDatosEspecificos () {
          $('.modal').modal();
     var url = $(this).data("url");
     $.getJSON(url,
         function (response) {
             var pokemons = response.results;
             crearModalPokemons(pokemons);
         });

 };



 var plantillaModal =
     '<div  id="modal1" class="modal row">' +
     '<div class="modal-content">' +
     '<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat right">' +
     '<i class="material-icons">' +
     'close' +
     '</i>' +
     '</a>' +
     '<h4>__nombre__</h4>' +
     '<img class="responsive-img center" src="assets/img/__nombreImagen__.png">' +
     '<div class="col s4">' +
     '<p>Color: __color__</p>' +
     '<p>Shape: __shape__</p>' +
     ' </div>' +
     '<div class="col s4">' +
     '<p>Habitat: __habitat__</p>' +
     '<p>Genera: __genera__</p>' +
     ' </div>' +
     '</div>' +
     '</div>' +
     '</div>';


 function crearModalPokemons(pokemons) {
     var plantillaModalDefinitiva = " ";

     $(pokemons).each(function (i, pokemon) {
         plantillaModalDefinitiva += plantillaModal
             .replace("__nombre__", pokemon.name)
             .replace("__nombreImagen__", pokemon.name)
             .replace("__color__", pokemon.color.name)
             .replace("__shape__", pokemon.shape.name)
            .replace("__genera__", pokemon.genera[2].genus)
     });
 
     $("#modal").html(plantillaModalDefinitiva);
    
     console.log(plantillaModalDefinitiva);
 };



 $(document).on("click", ".card", ajaxDatosEspecificos);
 $(document).ready(cargarPagina);
