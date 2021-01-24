import React, { useEffect, useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import getAll from '../../../repositories/caes';

function ListaCao() {
    const [dadosIniciais, setDadosIniciais] = useState([]);

    useEffect(() => {
        getAll()
            .then((caes) => {
                setDadosIniciais(caes);
                console.log(caes);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    let verificador = 0;
    return (
        <PageDefault>
            {dadosIniciais.length === 0 && (<div>Loading...</div>)}

            {dadosIniciais.map((cao, indice) => {
                for (let i = 0; i < dadosIniciais.length; i += 1) {
                    if (!(typeof dadosIniciais[indice] === 'undefined') && verificador === 0) {
                        verificador += 1;
                        return (
                            <div>
                                {cao.nome}
                            </div>
                        );
                    }
                    if (!(typeof dadosIniciais[indice] === 'undefined')) {
                        return (
                            <div>
                                {cao.nome}
                            </div>
                        );
                    }
                }
            })}
        </ PageDefault>
    );
}

export default ListaCao;