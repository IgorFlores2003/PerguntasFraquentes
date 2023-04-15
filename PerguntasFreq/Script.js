window.addEventListener("load", ()=>{
    
    const Bot = document.getElementById("button")

    Bot.onclick = () => {
        const input = document.getElementById("Resposta")
        const lista = document.getElementById("lista")


        if(input.value != "" ){
                  

            const Lista = document.createElement("li")
            Lista.classList.add("list-group-item" ,"list-group-item-success")
           
    
            const texto = document.createTextNode(input.value)

            Lista.append(texto)
            lista.append(Lista)
            
            let contador = 0;
            
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

            




     