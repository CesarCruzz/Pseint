class Arreglos{
  arreglos(){
    console.log("Operaciones Arreglos")
    let c=4 
    const numeros=[]
    numeros[0]=10
    numeros[1]=20
    numeros.push(30) // posicion 2
    numeros[3]=40
    numeros[c]=50
    c=c+1
    numeros[c]=60
    c=c+1              // 0..0.1  0.75....1  
    let x = parseInt(Math.random()*10) // 0.1, 0.2     1
    numeros[c]=x
    numeros[0]=15
    let num = numeros
    let num2 = numeros[0]
    // console.table({numeros,num})
    // console.log("longitud:",numeros.length)
    // console.log(`numeros[${c}]=${numeros[c]}`)
    // console.log("numero random=",parseInt(Math.random()*100))
    // console.log(`num=${num}`)
    // console.log(`num2=${num2}`)
    // let valores = "100;50;120;50;40"
    // let datos = valores.split(";") // ["100","50","120","50","40"]
    //console.log(`valores=${valores} - datos=[${datos}]`)
    //console.table({valores,datos})
    //console.log(datos[0])
    //console.log("Listado de valores")
    // x=0
    // for(let i=0;i < datos.length;i++){
    //   console.log(datos[i])
    //   x = x + parseInt(datos[i])  
    // }
    // console.table({x})
    // let numeros2 = []
    // let n=5
    // console.log("valores random")
    // for(let i=0;i < n;i++){
    //   numeros2[i] = parseInt(Math.random()*10)  
    // }
    // console.table({numeros2})
    // for(let i=0;i < numeros2.length;i++){
    //   if (numeros2[i]%2!=0) { 
    //     console.log(`numeros[${i}]${numeros2[i]}`)
    //   }  
    // }
    let nombres = ["daniel","ana","jose","miguel","dan"]
    nombres[nombres.length]="erick"
    nombres.push("Dalia")
    console.log("listado de nombres")
    nombres.push(nombres[parseInt(Math.random()*5)])
    console.table({nombres})
    for(let i=0;i < nombres.length;i++){
      if (nombres[i]!=="ana"){
         console.log(`nombres[${i}]${nombres[i]}`)
      }
    }
    console.log("nombres del ultimo al primero")
    let lim = nombres.length-1
    for(let i=lim;i >=0;i--){
      console.log(`nombres[${i}]${nombres[i]}`)
    }
  }
  mayor(){
    //'23;40;4;100' 
     let datos= document.getElementById("datos").value
     let numeros = datos.split(";") //["23","40","4","100"]
     let may=parseInt(numeros[0]) // 23
     //let dat = Json.parse(numeros[0]) // 23

     for(let i=1;i < numeros.length;i++){
        if (may < parseInt(numeros[i])){
          may = parseInt(numeros[i])//100
        } 
     }
     let resp = document.getElementById("resp")
     resp.textContent=`El mayor del arreglo[${numeros}] es= ${may}`
  }
  //            9
  acuDivisores(num){
     let acu=0
     for(let c=1;c<num;c++){
        if (num%c==0){
            acu=acu+c
        }
     }
     return acu //1+3=4
  }
  sumaDivisores(){
    //[4,6,9,10]=1+2=3,1+2+3=6,1+3=4,1+2+5=8
    let datos= document.getElementById("datos").value
    let numeros = datos.split(";") //["4","6","9","10"]
    let acu,num=0,resultado=""
    // recorre cada elemento del arreglo
    for(let i=0;i < numeros.length;i++){
        // proceso de suma de divisores
        num=parseInt(numeros[i])
        acu=this.acuDivisores(num)
        resultado=resultado+acu+"|"    //""+"3"="3"+"|"+"6"="3|6"
    }
    let resp = document.getElementById("resp")
    resp.textContent=`La suma de los divisores del arreglo[${numeros}] son= ${resultado}`
    
  }
  perfectos(){
    //[4,6,9,10]=1+2=3,1+2+3=6,1+3=4,1+2+5=8
    let datos= document.getElementById("datos").value
    let numeros = datos.split(";") //["4","6","9","10"]
    let acu,num=0,resultado=""
    // recorre cada elemento del arreglo
    for(let i=0;i < numeros.length;i++){
        // proceso de suma de divisores
        num=parseInt(numeros[i])
        acu=this.acuDivisores(num)
        if (acu==num){
           resultado=resultado+num+"|"    //""+"3"="3"+"|"+"6"="3|6"
        }
     }
    let resp = document.getElementById("resp")
    resp.textContent=`Los numeros perfecto del arreglo[${numeros}] son= ${resultado}`

  }
  decimalRomano(numeroDecimal) {
    const numeros = [100, 90, 50, 40, 10, 9, 5, 4, 1];
    const digitoRomanos = ['C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let numRomano = "";
    let indice = 0;
    
    while (numeroDecimal > 0) {
      while (numeroDecimal >= numeros[indice]) {
        numeroDecimal = numeroDecimal -numeros[indice];
       numRomano = numRomano+digitoRomanos[indice];
      }
     indice=indice+1;
    }

    return numRomano;
}
 
  base10_2() {
    let digito,numeros = [], base2 = "",aux
    let num = parseInt(document.getElementById("datos").value)
    aux=num
    while (num > 0) {
      digito = num % 2
      num = Math.floor(num / 2)
      numeros.push(digito)
    }
    for (let ind = numeros.length - 1; ind >= 0; ind--) {
      base2 = base2 + numeros[ind]
    }
    console.table({aux,base2})
    let resp = document.getElementById("resp")
    resp.textContent = `Base10[${aux}] es= ${base2} Base2`
  }

  buscarArreglo() {
    let datos = document.getElementById("datos").value
    let arreglo = datos.split(";")
    let buscado = document.getElementById("buscado").value
    let c = 0, enc = false
    while (c < arreglo.length && enc == false) {
      if (arreglo[c] == buscado){
        enc = true
      }
      else {
        c = c + 1
      }
    }
    let resp = document.getElementById("resp")
    if (enc == true) {
      //console.log(buscado, "se encuentra en la pos: ",c)
      resp.textContent = `el dato: ${buscado} se encuentra en la posicion:${c} del arreglo$${JSON.stringify(arreglo)}`
    } else {
      //console.log(buscado," no se encuentra")
      resp.textContent = `el dato: ${buscado} no se encuentra en el arreglo${JSON.stringify(arreglo)}`
    }
  }
  estudiantes(){
    const notas = [
      {nombre:"ana",n1:10,n2:20},{nombre:"dan",n1:20,n2:10},{nombre:"jose",n1:30,n2:50},
      {nombre:"miguel",n1:40,n2:40},
    ]
  
    let est,prom
    for(let i=0;i<notas.length;i++){
      est = notas[i]
      prom = (est.n1+est.n2)/2
      console.log(est.nombre,prom)
    }
  }
}

const arr = new Arreglos()
//arr.buscarArreglo()
// Ejempl   de uso
// const numero = 97;
// const romano = arr.decimalRomano(numero);
// console.log(`${numero} en números romanos es: ${romano}`)