
let arg = document.querySelector("#arg");
const btn = document.querySelector("#calcular");
let vet1 = [];//Vetor que será populado incluindo o numero 0
let vet2 = [];//Vetor que será populado sem o 0, pelo comando slice.

btn.onclick = () => {
  if (arg.value == ""){
    arg.focus();
  }else{
   lm.value = LuidyMoura(arg.value);
  }
}



function LuidyMoura (arg){

  for(let i=0; i <= arg; i++){//Populando o vetor até "arg".
    
    if ((i%5 == 0 ) && (i%9 == 0)){//Verifica se o numero tem resto 0 quando dividico por 5 e 9.
      vet1[i] = ("LuidyMoura");
    
    }else if(i%5 == 0 ){//Verifica se o numero tem resto 0 quando dividico por 5.
      vet1[i] = ("Luidy");
      
    }else if (i%9 == 0){//Verifica se o numero tem resto 0 quando dividico por 9.
      vet1[i] = ("Moura");
    
    }else{
      vet1[i]=i;
        
  }
  vet2 = vet1.slice(1);//Prenche o vetor "vet2" sem o numero 0.
  }
  
  lm.value = vet2;
  return lm.value;
  }

