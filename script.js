function ExecutarSorteio()
{
  aleatorio=Math.round(Math.random()*10) 
  console.log(aleatorio)
  chute=prompt("Escolha um número de 1 a 10")
  numsorteado=chute==aleatorio
  if(chute <0 || chute >10){
    alert("Por Favor escolha um número entre 1 e 10")
  }
  if(numsorteado){
    paragrafoResultado.innerHTML= `Você ganhou o sorteio!`
    
  }
  if(!numsorteado){
    paragrafoResultado.innerHTML= `Tente outra vez`
     paragrafoResultado.style.backgroundColor= "red"
  }
}