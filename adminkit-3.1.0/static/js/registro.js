//variables registro ---------------------------------------------------->
let impNombre = document.getElementById('nombreSignUp');
let impEmpresa = document.getElementById('compañiaSignUp');
let impCorreo = document.getElementById('correoSignUp');
let impContraseña = document.getElementById('contraseñaSignUp');
let impRegistrarse = document.getElementById('formSignUp');  

//varailbes incio de secion --------------------------------------------->
let impContraseñaSingIn = document.getElementById('contraseñaSignIn');
let impCorreoSingIn = document.getElementById('correoSignIn');
let impLogearse = document.getElementById('formSignIn');
//Enlaces externos-------------------------------------------------------->
//let enlaceEsternoUno =document.getElementById('');

//----------------------------------------------------------------------->
if(impLogearse != null) impLogearse.addEventListener('submit', Login);

if(impRegistrarse != null) impRegistrarse.addEventListener('submit', valDatos);

//Funciones ------------------------------------------------------------->

function valDatos(event)
{
    let valdiacionCorreo =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let valdiacionContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}[^'\s]/;

    if(impNombre.value.length < 6 || impNombre.value.length > 60 )
    {
        event.preventDefault();
        alert("El nombre debe ser mayor a 6 caracters");
        
    }  
    else if(impEmpresa.value.length < 3 || impEmpresa.value.length > 60 )
    {
        event.preventDefault();
        alert("El nombre de la empresa debe ser mayor a 6 caracters");
    }
    else if(!valdiacionCorreo.test(impCorreo.value))
    {
        event.preventDefault();
        alert("El correo electronico no es valido");
    }
    else if(!valdiacionContraseña.test(impContraseña.value))
    {
        event.preventDefault();
        alert("La contraseña debe contener 1 caracter especial, un numero, una mayuscula" +
                 "No ser menor a 8 caracteres o mayor a 15 caracteres");
    }
    else
    {
        let Usuario = 
        { 
            nombre:impNombre.value,
            contraseña:impContraseña.value,
            correo:impCorreo.value,
            empresa:impEmpresa.value
        }
        
        localStorage.setItem('Usuario',JSON.stringify(Usuario));
    }
}

function Login(event){

verificarUsuario = JSON.parse(localStorage.getItem('Usuario'));

if(verificarUsuario.correo !== impCorreoSingIn.value || 
    verificarUsuario.contraseña !== impContraseñaSingIn.value)
{
    event.preventDefault();
    alert("Usuario o contraseña no validos");
    console.log('ErrorLogin');
}
else
{
    let secionUsuario = 
    {
        contraseña:impContraseñaSingIn.value,
        correo:impCorreoSingIn.value,
    }

    localStorage.setItem('secionUsuario',JSON.stringify(secionUsuario));
} 

}
//funcion de acces a enlace externo solo por logeo
/*
enlaceExterno.addEventListener('click', (event) => {

    if(secionUsuario.contraseña !== Usuario.contraseña && secionUsuario.correo !== Usuario.correo) event.preventDefault()

})

*/

/*
console.log(JSON.parse(localStorage.getItem('Usuario')));
console.log(JSON.parse(localStorage.getItem('secionUsuario')));
verificarUsuario = JSON.parse(localStorage.getItem('Usuario'));
console.log(verificarUsuario.correo);
console.log(impCorreoSingIn.value);
console.log(verificarUsuario.contraseña);
console.log(impContraseñaSingIn.value );
*/
