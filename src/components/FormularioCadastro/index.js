import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from '../../components/Button';

function FormularioCadastro() {
    return (
            <Form style={{ margin: '0.5% 5%', padding: '1% 5%', background: 'whitesmoke' }}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="João" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSobrenome">
                        <Form.Label>Sobrenome</Form.Label>
                        <Form.Control type="text" placeholder="da Silva" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="joaodasilva@email.com" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridSenha">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridConfirmacaoSenha">
                        <Form.Label>Confirmação de senha</Form.Label>
                        <Form.Control type="password" placeholder="Confirme a senha" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEndereço">
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control placeholder="Rua das Palmeiras, Bairro Floresta" />
                    </Form.Group>

                    <Form.Group as={Col} xs lg="2" controlId="formGridNumero">
                        <Form.Label>Número</Form.Label>
                        <Form.Control type="number" placeholder="Número" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEstado">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control as="select" defaultValue="Selecionar...">
                            <option>Selecionar...</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCidade">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control as="select" defaultValue="Selecionar...">
                            <option>Selecionar...</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCEP">
                        <Form.Label>CEP</Form.Label>
                        <Form.Control type="number" placeholder="99888000" />
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Receber novidades" />
                </Form.Group>

                <Button type="submit">
                    Cadastrar
                </Button>
            </Form>
    );
}

export default FormularioCadastro;