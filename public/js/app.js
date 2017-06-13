 var plantillaPokemons = '<div class="col s6 m3">' +
   '<div class="card waves"  data-url="https://pokeapi.co/api/v2/pokemon-species/__indice__/">' +
   '<div class= "card-content center-align circle">' +
   '<img class="responsive-img center" src="assets/img/__nombreImagen__.png">' +
   '<h6 id="nombre" class="pokemon" "><a style="color: white" href="#modal1">__nombre__</a></h6>' +
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
   $("#next").click(siguientesPokemons);
   $("#previous").click(anterioresPokemons);
   $.getJSON("https://pokeapi.co/api/v2/pokemon/",
     function (response) {
       var pokemons = response.results;
       var next = response.next;
       $("#next").attr("data-url", next);
       crearPokemons(pokemons);
     });
 };


 var crearModalPokemon = function (detalle) {
   $("#nombrePoke").text(detalle.nombrePoke);
   $("#imagenModal").attr("src", "assets/img/" + detalle.nombreImagen + ".png");
   $("#color").text(detalle.color);
   $("#genera").text(detalle.genera);
   $("#habitat").text(detalle.habitat);
   $("#shape").text(detalle.shape);
 };


 var ajaxDatosEspecificos = function () {
   var url = $(this).data("url");
   var $nombrePoke = $(this)[0].textContent;
   $.getJSON(url,
     function (response) {
       // response trae los datos específicos que necesitamos
       var color = response.color.name;
       var genera = response.genera[0].genus;
       var habitat = response.habitat.name;
       var shape = response.shape.name;

       crearModalPokemon({
         nombrePoke: $nombrePoke,
         nombreImagen: $nombrePoke,
         color: color,
         genera: genera,
         habitat: habitat,
         shape: shape
       });
     });
 };



 var siguientesPokemons = function () {
   var url = $("#next").attr("data-url");
   $.getJSON(url, function (response) {
     var pokemons = response.results;
     var siguientes = response.next;
     var anteriores = response.previous;
     $("#previous").attr("data-url", anteriores);
     $("#next").attr("data-url", siguientes);
     crearPokemons(pokemons);
   });
 }

 
var anterioresPokemons = function() {
  var url = $("#previous").attr("data-url");
  $.getJSON(url, function(response) {
    var pokemons = response.results;
    var siguientes = response.next;
     var anteriores = response.previous;
     $("#previous").attr("data-url", anteriores);
     $("#next").attr("data-url", siguientes);
     crearPokemons(pokemons);
  });
};







 $(document).on("click", ".card", ajaxDatosEspecificos);
 $(document).ready(cargarPagina);
