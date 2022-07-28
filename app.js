let respuestaSecreta = "amau"
for (let i=1; i<=3 ;i++){
    let preguntaSecreta = prompt( "¿Como es el nombre de tu primera mascota?")
    if (respuestaSecreta == preguntaSecreta){
        console.log( "Puedes cambiar la contraseña.")
     break;

    }else {
        console.log("No puedes ingresar.")
    }
}