const cadastrarParceiros = ({nome, sobrenome, cpf, email, senha, confirmacao, endereco, numero, estado, cidade, cep, novidades}) => {
    const json = JSON.stringify({
        nome: nome,
        sobrenome: sobrenome,
        cpf: cpf,
        email: email,
        senha: senha,
        confirmacao: confirmacao,
        endereco: endereco,
        numero: numero,
        estado: estado,
        cidade: cidade,
        cep: cep,
        novidades: novidades
    })
    return fetch('https://restapidogregister.herokuapp.com/parceiros', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: json
    })
        .then(resp => {
            return resp.body
        })
}

export default cadastrarParceiros;