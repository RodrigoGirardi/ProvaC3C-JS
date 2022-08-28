let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");

let delta = document.querySelector("#delta");

let raiz1 = document.querySelector("#raiz1");
let raiz2 = document.querySelector("#raiz2");

let vetRaizes = [0];

let btn = document.querySelector("#calcular");

btn.onclick = () => {
  if (a.value == ""){
    a.focus();
  }else if (b.value == ""){
    b.focus();
  }else if(c.value == ""){
    c.focus();
  }else{
    res.value = calculadoraBhaskara(a.value, b.value,c.value);
  }
}

function calculadoraBhaskara(a,b,c){
      
      delta=b*b-4*a*c;
      raiz1 = (-b + Math.sqrt(delta))/(2*a);
      raiz2 = (-b - Math.sqrt(delta))/(2*a);
  
      if(delta == 0){
        de.value = ("Delta é igual a 0");
        vetRaizes[0] = raiz1;
        vetRaizes[1] = raiz1;
        res.value = vetRaizes;       
      }else if (delta < 0 ){
        de.value = delta;
        res.value = ("Delta é negativo");       
      }else{
        de.value = ("Delta positivo");     
        vetRaizes[0] = raiz1;
        vetRaizes[1] = raiz2;
        res.value = vetRaizes;
      }
      return res.value;
}