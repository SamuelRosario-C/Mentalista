const chutar = document.querySelector('#chutar')

chutar.onclick = () => {
    const resultado = document.querySelector('#resultado')
    let meuValor = parseFloat(document.querySelector('#valor').value)

    const mentalista = Math.floor(Math.random() * 11)

    if (meuValor >= 0 && meuValor <= 10) {

        if (meuValor === mentalista) {
            resultado.innerHTML = `o número pensado foi ${mentalista} você acertou!`
            console.log(mentalista)

        }else{
            resultado.innerHTML = `o número pensado foi ${mentalista} você errou!`
            console.log(mentalista)
        }
    }else{
        resultado.innerHTML = "Desculpe, o número tem que ser entre 0 e 10"
    }
}