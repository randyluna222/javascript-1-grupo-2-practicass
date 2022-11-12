//Escribe un programa que invierta una cadena usando recursión. Dada la cadena "freeCodeCamp", el programa debería devolver "pmaCedoCeerf"
var Palabra = prompt("Digite una palabra")
        function invertir(let){
            if(let === ''){
                return '';
            } else {
                return invertir(let.substr(1)) + let.charAt(0);
            }
        }
    
        console.log(invertir(Palabra))
        break

//2. Escribe un programa que devuelva el número de veces que aparece una letra en una cadena. Tu programa debería recibir una cadena y la letra.
function contar() {
  const texto_ = document.getElementById('texto').
  value.trim().toLowerCase().split('');
  const repetir = {};
  texto_.forEach( ( letra ) => {
    repetir[ letra ] = ( repetir[ letra ] || 0 ) + 1;
  });
  for( let letra in repetir ) {
    const text_ = `${ letra } = ${ repetir[ letra ] }`;
   console.log(text_)
  }      
}
break




//3.Escriba un programa que reciba una frase y este debe de intercambiar las vocales por la ‘i’. Ej, “esta es la entrada” → “isti is li intridi”
    const letra = prompt("Digite una palabra")
    function quitarPalabras(str) {
        let palabra = str.replace(/[aáAÁeéEÉiíIÍoOóÓuúUÚ]/g, 'i')
        return palabra
    }
      const a = quitarPalabras(letra);
      console.log(a);

      break 
  
//4. Escriba un programa que reciba una palabra y reordene sus letras en orden alfabético. Ej. hola → ahlo

const palabra = prompt("Digite una palabra")
const cadenaConLetraOriginal = cadena => {
    const cadenaComoArreglo = cadena.split("");
    cadenaComoArreglo.sort();
    const cadenaOrdenada = cadenaComoArreglo.join("");
    return cadenaOrdenada;
};
const conLetraOriginal = cadenaLetraOriginal(palabra);
console.log("Palabra original: '%s'. Palabra con letras ordenadas de forma alfabetica: '%s'", palabra, conLetraOriginal);
break

}
        

    
    

    
