const form = document.getElementById("orderForm")

form.addEventListener("submit", function(ev){
    ev.preventDefault()

    const name = document.querySelector('input[name="name"]').value
    const address = document.querySelector('input[name="address"]').value
    const breadType = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]').value
    const observations = document.querySelector('textarea[name="observations"]').value
    
    let salad = ""
    document.querySelectorAll('input[name="salad"]:checked').forEach(function(item){
        salad += " - " + item.value + "\n"
    })

    const confirmation = confirm ('Confirmar pedido?')
    if(confirmation){
       const orderList = document.getElementById("orderList")
       const novoPedido = document.createElement('li')
       novoPedido.id = "Pedido " + orderList.lenght 
       novoPedido.innerText = "Pedido confirmado para: " + name + 
       "\n Endereço: " + address + 
       "\n Conteúdo: " + "\n Tipo de pão: " + breadType +
       "\n Principal: " + main +
       "\n Salada: " + "\n" + salad +
       "Observações/Adicionais: " + observations + "\n \n"

       orderList.appendChild(novoPedido)
       document.getElementById("name").value = ""
       document.getElementById("address").value = ""
       document.getElementById("breadType").value = ""
       document.getElementById("main").value = ""
       document.getElementById("observations").value = ""
       document.getElementById("salad").value = false
    }
})

