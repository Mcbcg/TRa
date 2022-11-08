function enviarcomentario(){
     let buttonsResposta = document.querySelectorAll('.fio button');
     console.log("teste",buttonsResposta)
    for(let i = 0; i <buttonsResposta.length; i++){
              
                    let respostas = document.querySelectorAll('.respostas');
                    respostas[i].style.display = "block";
                    let forms = document.querySelectorAll('form');
                    for(let i = 0; i <forms.length; i++){
                        
                       
                        let conteudo = document.querySelectorAll('textarea')[i];
                        forms[i].innerHTML =forms[i].innerHTML +('<p>'+conteudo.value+'</p>')
                           
                        
                    }
               
            }
           
        }