
document.querySelector("#ingresar").addEventListener('click', () => {
    let numero1 = document.querySelector("#numero1").value;
    let numero2 = document.querySelector("#numero2").value;
    let numero3 = document.querySelector("#numero3").value;
    
    let numeros = numero1 + numero2 + numero3;
    let texto = document.querySelector("#texto");
    
    if (numeros === '222') {
      texto.innerHTML = "su contraseña principal es correcta";
    } else if (numeros === '644') {
      texto.innerHTML = "Su Contraseña es correcta";
    } else {
      texto.innerHTML = "Contraseña incorrecto";
    }
  });