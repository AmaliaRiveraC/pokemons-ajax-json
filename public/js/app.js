 var plantillaPokemons = '<div class="col s6 m2">' +
   '<div class="card waves-effect"  data-url="http://pokeapi.co/api/v2/pokemon-species/__indice__/">' +
   '<div class= "card-content center-align circle">' +
   '<img class="responsive-img center" src="assets/img/__nombreImagen__.png">' +
   '<h6 id="nombre" class="pokemon" "><a href="#modal1">__nombre__</a></h6>' +
   '</div>' +
   '</div>' +
   '</div>';

 var crearPokemons = function (pokemons) {
   var plantillaFinal = " ";
   $(pokemons).each(function (i, pokemon) {
     plantillaFinal += plantillaPokemons
       .replace("__id__", i)
       .replace("__nombre__", pokemon.name)
       .replace("__nombreImagen__", pokemon.name)
       .replace("__indice__", i + 1)
   });
   $("#pokemons").html(plantillaFinal);

 };

 var cargarPagina = function () {
   $('.modal').modal();
   $('.btn-floating').sideNav();
   $.getJSON("http://pokeapi.co/api/v2/pokemon/",
     function (response) {
       var pokemons = response.results;
       crearPokemons(pokemons);
     });
 };



 /*var plantillaModal =
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
   '<p>Genera: __genera__</p>' +
   '<p>Habitat: __habitat__</p>' +
   '<p>Shape: __shape__</p>' +
   ' </div>' +
   '<div class="col s4">' +
   ' </div>' +
   '</div>' +
   '</div>' +
   '</div>';*/

 var crearModalPokemon = function (nombrePoke, nombreImagen, color, genera, habitat, shape) {
   


  /* var plantillaModalDefinitiva = " "; 
  plantillaModalDefinitiva += plantillaModal
     .replace("__nombre__", nombrePoke)
     .replace("__nombreImagen__", nombrePoke)
     .replace("__color__", color)
     .replace("__genera__", genera)
     .replace("__habitat__", habitat)
     .replace("__shape__", shape) 
   console.log(plantillaModalDefinitiva);
    $("#modal").html(plantillaModalDefinitiva);
   $(".modal").css("display", "block");*/
   
   $("#nombre").text(nombrePoke);
   $("#imagenModal").attr("src", "assets/img/" + nombreImagen + ".png");
   $("#color").text(color);
   $("#genera").text(genera);
   $("#habitat").text(habitat);
   $("#shape").text(shape);
   
   console.log(".modal");
 };


 var ajaxDatosEspecificos = function () {
   var url = $(this).data("url");
   var nombrePoke = $(this)[0].textContent;
   $.getJSON(url,
     function (response) {
       // response trae los datos específicos que necesitamos
       var color = response.color.name;
       var genera = response.genera[0].genus;
       var habitat = response.habitat.name;
       var shape = response.shape.name;

       crearModalPokemon(nombrePoke, nombrePoke, color, genera, habitat, shape);


     });

 };








 $(document).on("click", ".card", ajaxDatosEspecificos);
 $(document).ready(cargarPagina);
