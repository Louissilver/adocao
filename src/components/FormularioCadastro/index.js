import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from '../../components/Button';
import cadastrarParceiros from '../../repositories/parceiros';

function FormularioCadastro() {

    const [validated, setValidated] = useState(false);
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmacao, setConfirmacao] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [cep, setCep] = useState("");
    const [novidades, setNovidades] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        cadastrarParceiros({ nome, sobrenome, cpf, email, senha, confirmacao, endereco, numero, estado, cidade, cep, novidades });
        setValidated(true);
    };

    return (
        <Form
            style={{ margin: '0.5% 5%', padding: '1% 5%', background: 'whitesmoke' }}
            noValidate validated={validated} onSubmit={handleSubmit}>
            <p style={{ fontSize: '11px' }}>Campos com * são obrigatórios</p>
            <hr />
            <Form.Row>
                <Form.Group as={Col} controlId="formGridNome">
                    <Form.Label>* Nome:</Form.Label>
                    <Form.Control
                        value={nome}
                        onChange={(event) => {
                            setNome(event.target.value);
                        }}
                        name="nome"
                        required
                        type="text"
                        placeholder="João" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridSobrenome">
                    <Form.Label>* Sobrenome:</Form.Label>
                    <Form.Control
                        value={sobrenome}
                        onChange={(event) => {
                            setSobrenome(event.target.value);
                        }}
                        name="sobrenome"
                        required
                        type="text"
                        placeholder="da Silva" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCPF">
                    <Form.Label>* CPF:</Form.Label>
                    <Form.Control
                        value={cpf}
                        onChange={(event) => {
                            setCpf(event.target.value);
                        }}
                        name="cpf"
                        required
                        type="number"
                        placeholder="11122233345" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>* E-mail:</Form.Label>
                    <Form.Control
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        name="email"
                        required
                        type="email"
                        placeholder="joaodasilva@email.com" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridSenha">
                    <Form.Label>* Senha:</Form.Label>
                    <Form.Control
                        value={senha}
                        onChange={(event) => {
                            setSenha(event.target.value);
                        }}
                        name="senha"
                        required
                        type="password"
                        placeholder="Senha" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridConfirmacaoSenha">
                    <Form.Label>* Confirmação de senha:</Form.Label>
                    <Form.Control
                        value={confirmacao}
                        onChange={(event) => {
                            setConfirmacao(event.target.value);
                        }}
                        name="confirmacao"
                        required
                        type="password"
                        placeholder="Confirme a senha" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridEndereço">
                    <Form.Label>* Endereço:</Form.Label>
                    <Form.Control
                        value={endereco}
                        onChange={(event) => {
                            setEndereco(event.target.value);
                        }}
                        name="endereco"
                        placeholder="Rua das Palmeiras, Bairro Floresta" />
                </Form.Group>

                <Form.Group as={Col} xs lg="2" controlId="formGridNumero">
                    <Form.Label>* Número:</Form.Label>
                    <Form.Control
                        value={numero}
                        onChange={(event) => {
                            setNumero(event.target.value);
                        }}
                        name="numero"
                        required
                        type="number"
                        placeholder="Número" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridEstado">
                    <Form.Label>Estado:</Form.Label>
                    <Form.Control
                        value={estado}
                        onChange={(event) => {
                            setEstado(event.target.value);
                        }}
                        name="estado"
                        as="select">
                        <option>Selecionar...</option>
                        <option>Rio Grande do Sul</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCidade">
                    <Form.Label>Cidade:</Form.Label>
                    <Form.Control
                        value={cidade}
                        onChange={(event) => {
                            setCidade(event.target.value);
                        }}
                        name="cidade"
                        as="select">
                        <option>Selecionar...</option>
                        <option>Estância Velha</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCEP">
                    <Form.Label>* CEP:</Form.Label>
                    <Form.Control
                        value={cep}
                        onChange={(event) => {
                            setCep(event.target.value);
                        }}
                        name="cep"
                        required
                        type="number"
                        placeholder="99888000" />
                </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
                <Form.Check
                    value={novidades}
                    onChange={(event) => {
                        setNovidades(event.target.value);
                    }}
                    name="novidades"
                    type="checkbox"
                    label="Receber novidades" />
            </Form.Group>

            <Button type="submit">
                Cadastrar
                </Button>
        </Form>
    );
}

export default FormularioCadastro;