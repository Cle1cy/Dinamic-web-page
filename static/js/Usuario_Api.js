window.onload = init; 

function init(){
	leerDatos(); 
}

function leerDatos(){
	let fuente_datos = 'https://randomuser.me/api/';

	for(let i = 0; i < 9; i++){
		fetch(fuente_datos)
		.then(res => res.json())
		.then(pintarDatos);
	}	
}

function pintarDatos(datos){
	let usuarios = datos;
	let html = "";
	console.log(usuarios);
	html += crearUsuario(usuarios);
}

function crearUsuario(datos){
	let nombre = datos.name;
	let email = datos.email;
}