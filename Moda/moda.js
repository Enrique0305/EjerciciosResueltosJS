//Primera forma
//tenemos nuestra lista de elementos
const lista = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
    6,
  ];
  //en este objeto vamos a meter el numero y la cantidad de veces que se repite
  const listaCount = {};
  //usamos map para el recorrido de la lista y vamos mutando nuestro objeto de acuerdo al recorrido
  lista.map(
    (elemento) =>{
      (listaCount[elemento]) 
      ? listaCount[elemento] += 1
      : listaCount[elemento] = 1;
    }
  );
  //vamos a convertir nuesstro objeto a una matriz(arreglo de arreglos) y ordenarlo con sort para la cantidad de elementos que se repiten
  const listaArray = Object.entries(listaCount).sort(
    (elementoA, elementoB)=> elementoA[1] - elementoB[1]
  );
  //nos devuelve un arreglo con el elemento que mas se repite --->['2', 5]
  const moda = listaArray[listaArray.length - 1];

  //faltaria convertirla en funcion para que pueda recibir a traves del input e interactura con el html