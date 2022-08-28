let n = document.querySelector("#n");//nota recebida pelo input
let resto = document.querySelector("#resto");//resto que sera 
let nf = document.querySelector("#nf");
let ap = document.querySelector("#ap");

const btn = document.querySelector("#calcular");


btn.onclick = () => {
  if (n.value == ""){
    n.focus();
  }else{
    nf.value = verificaNota(n.value);
  }
}



function verificaNota(n){
  resto = (n%5);
  
  while(n > 37){
    if(resto == 4){// se o resto for 4.Logo o valor tem seu segundo digito sendo 4 ou 9;
      nr1 = parseInt(n)+1;
      nf.value = nr1;
      ap.value = ("Aprovado!");
      return nf.value;
      
    }else if(resto == 3){// se o resto for 4.Logo o valor tem seu segundo digito sendo 3 ou 8;
      nr2 = parseInt(n)+2;
      nf.value = nr2;
      ap.value = ("Aprovado!");
      return nf.value;
      
    }else{//Se o resto for 2 ou 1, não ocorre arredondamento.
      nf.value = (n);
      ap.value = ("Aprovado!");
      return nf.value;
    }
  }  
  if(n <= 37){//Caso a nota for menor ou igual a 37, o aluno está reprovado
    nf.value = (n);
    ap.value = ("Reprovado");
    return nf.value;
  }
}
