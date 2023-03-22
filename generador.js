const frases = [
    "No hay nada imposible, porque los sueños de ayer son las esperanzas de hoy y pueden convertirse en realidad mañana - Ronald Reagan.",
    "La vida es 10% lo que te sucede y 90% cómo reaccionas ante ello - Charles R. Swindoll",
    "Sé el cambio que quieres ver en el mundo - Mahatma Gandhi",
    "La educación es el arma más poderosa que puedes usar para cambiar el mundo - Nelson Mandela",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día - Robert Collier",
    "La creatividad es la inteligencia divirtiéndose - Albert Einstein",
    "La mejor manera de predecir el futuro es inventarlo - Alan Kay",
    "La felicidad no es algo hecho. Viene de tus propias acciones - Dalai Lama",
    "El liderazgo no se trata de ser el jefe. Se trata de servir a aquellos a los que lideras - Simon Sinek",
    "Todo lo que siempre has querido está al otro lado del miedo - George Addair"
  ];
  

  function generarFrase() {
    const indice = Math.floor(Math.random() * frases.length);
    return frases[indice];
  }

  function MostrarFrase() {
    const frase = generarFrase();
    document.getElementById("frase").innerHTML = generarFrase();

    /*const fraseElemento = document.getElementById("frase");
    fraseElemento.textContent = frase;*/
  }

  /*function colocaExcusa() {
    document.getElementById("excusa").innerHTML = generaExcusa();
}*/

  MostrarFrase();