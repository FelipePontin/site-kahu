import React from "react"

import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Servicos from './components/Servicos/Servicos'
import Estrutura from "./components/Estrutura/Estrutura"
import ImageGallery from "./components/ImageGallery/ImageGallery"
import CardInfo from "./components/CardInfo/CardInfo"
import Creche from "./components/Creche/Creche"
import Hotel from './components/Hotel/Hotel'
import Banho from './components/Banho/Banho'
import Sobre from './components/Sobre/Sobre'
import Equipe from "./components/Equipe/Equipe"
import Avaliacoes from "./components/Avaliacoes/Avaliacoes"
import Redes from "./components/Redes/Redes"
import Rodape from "./components/Rodape/Rodape"
import { FaWhatsapp } from "react-icons/fa";

import './App.css'

const App = () => {
    return (
        <>
            <Header/>
            <div className='header__banner'></div>
            <Banner/>
            <Servicos/>
            <Estrutura/>
            <ImageGallery/>
            <CardInfo
                title='Não deixe seu Pet sozinho!'
                subtitle='Cuidamos do seu cãozinho enquanto você sai! Entre em contato e saiba como a Kahu pode ajudar com nossos serviços de creche e hotel.'
                textButton='Entre em contato'
                icone='IoPaw'
            />
            <Creche/>
            <Hotel/>
            <Banho/>
            <Sobre/>
            <Equipe/>
            <CardInfo
                title='Criando experiências incríveis'
                subtitle='Transformando a Creche em um Segundo Lar, Onde Alegria, Carinho e Cuidados Dedicados Fazem Toda a Diferença na Vida do Seu Pet.'
                textButton='Entre em contato'
                icone='IoPaw'
            />
            <Avaliacoes/>
            <Redes/>
            <Rodape/>
            <div className='botao__whatsapp'>
                <FaWhatsapp className='icone__whatsapp'/>
            </div>
        </>
    )
}

export default App
