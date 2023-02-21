let impNombre = document.getElementById('nombre');
let impEmpresa = document.getElementById('compañia');
let impCorreo = document.getElementById('correo');
let impContraseña = document.getElementById('contraseña');
let impRegistrarse = document.getElementById('formSingUp');  


impRegistrarse.addEventListener('submit', valDatos);

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
        const Usuario = 
        { 
            nombre:impNombre.value,
            contraseña:impContraseña.value,
            correo:impCorreo.value,
            empresa:impEmpresa.value
        }
        
        localStorage.setItem('Usuario',JSON.stringify(Usuario));
    }
}
array.forEach(element => {
    
});
console.log(JSON.parse(localStorage.getItem('Usuario')));


