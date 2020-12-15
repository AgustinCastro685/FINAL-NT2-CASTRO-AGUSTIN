export default  {
    methods : {

    modificar : function (texto){
    const letras= texto.split("");
    let arrayCodificado = letras.map(function(letra){
    switch (letra) {
       case 'a': letra = 'u'
         break;
        case 'e': letra = 'o'
            break;
       case 'o': letra = 'e'
            break;
        case 'u': letra = 'a'
          break;
       case 'i': letra = 'i'
          break;
     }
     return letra;
});
    return arrayCodificado.join('').toUpperCase();
}
}
}