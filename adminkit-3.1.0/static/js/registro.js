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
//ERRORES-------------------------------------------------------->
let errorNombre = document.getElementById('form-label-error-nombre');
let errorCorreo = document.getElementById('form-label-error-correo');
let erroresCompañia = document.getElementById('form-label-error-compañia');
let erroresContraseña = document.getElementById('form-label-error-contraseña');

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
        errorNombre.classList.remove('hiden');
    }  
    else if(impEmpresa.value.length < 3 || impEmpresa.value.length > 60 )
    {
        event.preventDefault();
        errorNombre.classList.add('hiden');
        erroresCompañia.classList.remove('hiden');
    }
    else if(!valdiacionCorreo.test(impCorreo.value))
    {
        event.preventDefault();
        erroresCompañia.classList.add('hiden');
        errorCorreo.classList.remove('hiden');
    }
    else if(!valdiacionContraseña.test(impContraseña.value))
    {
        event.preventDefault();
        errorCorreo.classList.add('hiden');
        erroresContraseña.classList.remove('hiden');
       
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
let error = document.getElementById('form-label-error');
let good = document.getElementById('form-label-good');
verificarUsuario = JSON.parse(localStorage.getItem('Usuario'));

if(verificarUsuario.correo !== impCorreoSingIn.value || 
    verificarUsuario.contraseña !== impContraseñaSingIn.value)
{
    event.preventDefault();
    error.classList.remove('hiden')
}
else
{
    error.classList.add('hiden')
    let secionUsuario = 
    {
        contraseña:impContraseñaSingIn.value,
        correo:impCorreoSingIn.value,
    }

    localStorage.setItem('secionUsuario',JSON.stringify(secionUsuario));

} 


}



console.log(JSON.parse(localStorage.getItem('Usuario')));
console.log(JSON.parse(localStorage.getItem('secionUsuario')));
verificarUsuario = JSON.parse(localStorage.getItem('Usuario'));
console.log(verificarUsuario.correo);
console.log(impCorreoSingIn.value);
console.log(verificarUsuario.contraseña);
console.log(impContraseñaSingIn.value );

