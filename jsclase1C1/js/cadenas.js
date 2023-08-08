class Cadena{
    cadena(){
        let nombre = "ana",car
        nombre ="Daniel"+"a"
        //       012345 6
        car = nombre[nombre.length-1]
        //console.table({nombre,car})
        //nombre[1]='A' // no se puede cambiar el caracter en una posicion
        //console.log(nombre[0])
        // for(let i=0;i < nombre.length;i++){
        //     console.log(nombre[i])
        // }
        let lim =nombre.length-1
        for(let i=lim;i >= 0;i--){
            console.log(nombre[i])
        }
    }
    vocales(){
        // "hola que tal"
        let frase = document.getElementById("datos").value
        let cv=0,cc=0
        for(let i=0;i < frase.length;i++){
            if (frase[i]== 'a' || frase[i]== 'e' || frase[i]== 'i' || frase[i]== 'o' || frase[i]== 'u' ) {
               cv=cv+1
            }
            if (frase[i]>= 'a' && frase[i]<= 'z' ) {
               cc=cc+1
            }
        }
        console.table({cv,cc})
        let resp = document.getElementById("resp")
        resp.textContent=`cantidad de vocales:= ${cv} cantidad de consonantes:= ${cc}`
   }
    insertar() {
        // "hola que tal"
        let cadena = document.getElementById("cadena").value
        let subcadena = document.getElementById("subcadena").value
        let posicion = parseInt(document.getElementById("posicion").value)
        let aux=""
        if (posicion >= 0 && posicion <= cadena.length){ 
            for (let i = 0; i < posicion; i++) {
                aux=aux+cadena[i]
            }
            // for (let i = 0; i < subcadena.length; i++) {
            //     aux = aux + subcadena[i]
            // }
            aux=aux+subcadena
            
            for (let i = posicion; i < cadena.length; i++) {
                aux = aux + cadena[i]
            }
             cadena=aux
             let resp = document.getElementById("resp")
             resp.textContent = `cadena nueva:= ${cadena}`
        }
        else{
            alert("la posicion no es valida")
        }

    }
}
let cad = new Cadena()
//cad.vocales()
