let impNombre = document.getElementById('nombre');
let impEmpresa = document.getElementById('compañia');
let impCorreo = document.getElementById('correo');
let impContraseña = document.getElementById('contraseña');
let impRegistrarse = document.getElementById('formSingUp');  


impRegistrarse.addEventListener('submit', valDatos);

function valDatos(){

    const Usuario = 
    {
        nombre:impNombre.value,
        contraseña:impContraseña.value,
        correo:impCorreo.value,
        empresa:impEmpresa.value
    }

    localStorage.setItem('Usuario',JSON.stringify(Usuario));

}

console.log(JSON.parse(localStorage.getItem('Usuario')));
console.log(impNombre.value);
console.log(impEmpresa.value);
console.log(impCorreo.value);
console.log(impContraseña.value);

