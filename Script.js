window.addEventListener("load", ()=>{
    const Bot = document.getElementById("button")

    Bot.onclick = () => {
        const input = document.getElementById("Resposta")
        const lista = document.getElementById("lista")

        if(input.value != ""){
            const Lista = document.createElement("li")
            Lista.classList.add("list-group-item" ,"list-group-item-success")
    
            const texto = document.createTextNode(input.value)
            Lista.append(texto)
            lista.append(Lista)
            input.value = ""

           
        }}})
