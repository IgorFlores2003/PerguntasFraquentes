Function pergunta(){
        const input = document.getElementById("Resposta")
        const lista = document.getElementById("lista")


        if(!input.value){
                  

            const Lista = document.createElement("li")
            Lista.classList.add("list-group-item" ,"list-group-item-success")
            
           
    
            const texto = document.createTextNode(input.value)

            Lista.append(texto)
            lista.append(Lista)
            
            let contador = 0;
            
            // Seleciona todas as 'li' e devolve um texto informando quantas vezes foi repetido a palavra
            const list = document.querySelectorAll("li"); 
            
            for (let i = 0; i < list.length; i++) {
              if (list[i].textContent.includes(input.value)) { 
                contador++;
              }
            }
     
            
            const tes = document.createTextNode(`A palavra '${input.value}' foi pesquisada ${contador} vezes.`)
            
            lista.append(tes)
    
            input.value=""}
        }  }
            
            )

            function limpar(){
              $("li").remove("#Lista");
            }
}
            




     
