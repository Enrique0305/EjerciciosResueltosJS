
//funcion para convertir mi string del inputValues a arreglo de numerico
function getList() {
    const list = document.getElementById('inputValues').value
    let nums = list.toString().split(",").map((value) => parseInt(value));
    return nums
}

function calcularMediaAritmetica(nums) {
    let totalSuma = nums.reduce((acumlador, value) => acumlador + value)
    let promedioLista = totalSuma / nums.length
    return promedioLista
}


function onClickButtonPromedio(){
    let arr = getList();
    let promedio =calcularMediaAritmetica(arr);
    const resultp = document.getElementById("main__result");
    resultp.innerText = `El promedio es: ${promedio}`;
}