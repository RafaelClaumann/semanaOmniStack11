import React, { useState } from 'react';
import './styles.css';  // logon style
import heoresImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';  // link sem recarregar a página inteira.
import api from '../../services/api';

export default function Logon() {
    const [id, setID] = useState('');
    const history = useHistory();
    
    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await api.post('session', { id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        } catch (error) {
            alert('Falha no login, tente novamente!');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input
                        placeholder="sua ID"
                        value={id}
                        onChange={e => setID(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não Tenho Cadastro
                    </Link>
                </form>
            </section>
            <img src={heoresImg} alt="Heroes" />
        </div>
    );
}
