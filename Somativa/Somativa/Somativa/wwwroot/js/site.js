async function atualizaPreco() {
    let id = document.getElementById("CodigoProd").value;
    let Valor = document.getElementById("Valor");

    await fetch(`/Produtos/Preco/${id}`)
        .then(response => { return response.json(); })
        .then(data => { Valor.value = data; })
}