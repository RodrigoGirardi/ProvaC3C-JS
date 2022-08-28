const lado1 = document.querySelector("#lado1");
const lado2 = document.querySelector("#lado2");
const lado3 = document.querySelector("#lado3");

const resultado = document.querySelector("#resesultado");
const btn = document.querySelector("#calcular");



btn.onclick = () => {
  if (lado1.value == ""){
    lado1.focus();
  }else if (lado2.value == ""){
    lado2.focus();
  }else if(lado3.value == ""){
    lado3.focus();
  }else{
    res.value = verificaTriangulo(lado1.value, lado2.value,lado3.value);
  }
}


let verificaTriangulo = (lado1,lado2,lado3) => {
if (lado1 == lado2 && lado1 == lado3){
  res.value = ("Triangulo Equilatero");
}
else if(lado1 != lado2 && lado1 != lado3){
  res.value = ("Triangulo Escaleno");
}else{
  res.value = ("Triangulo Isoceles");
}
  return res.value;
}