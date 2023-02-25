window.onload = init;
function init(){
	leerDatos();
}

function leerDatos(){
	let fuente_datos = "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9?&status=alive";
}

fetch(fuente_datos+id)
  .then((response)=>{
    return response.json();
  })
  .then((data)=>{
    //console.log(data);
    llenarTarjeta(data);
     
  })

function llenarTarjeta(data){
  codigo_personaje.innerHTML = data.id;
  fotoPerfil.innerHTML  = "<img src='"+data.image+"' />";
  nombre_personaje.innerHTML = data.name;
  Especie_personaje.innerHTML = data.species;
  genero_personaje.innerHTML = data.gender;
  return Tarjeta;
}

function pintarGaleria(){
	let html = '';
	let contador = 1;
	let contenedor = document.querySelector(".galeria");

	for(var i in Tarjeta){

		html += (contador==1)?'<div class="row shop-wthree-info text-center">':'';
		html += llenarTarjeta(Tarjeta[i]);
		if(contador==4)
		{
			html += '</div>';
			contador = 1;
		}
		else{
			contador++;
		}
	}
    html += "<br><br>";
	contenedor.innerHTML = html;
}