import React from 'react'
import { FaGlobe, FaFlagUsa, FaUsers, FaRegBuilding, FaCarSide, FaRegImages } from 'react-icons/fa'
import { RiBankLine, RiRadioLine } from 'react-icons/ri'


export const navLinks = [
    {
        path: '/',
        text: 'Home'
    },
    {
        path: '/about',
        text: "about"
    },
    {
        path: '/contact',
        text: 'Contact'
    },
    {
        path: '/help',
        text: 'Help'
    },

]




export const serviceLinks = [
    {
        path: 'http://services.brazuca.online/ingles',
        text: 'Inglês',
        icon: <FaGlobe className="br-serv__items--icons" />
    },
    {
        path: 'http://services.brazuca.online/cidadania',
        text: 'Cidadania',
        icon: <FaFlagUsa className="br-serv__items--icons" />
    },
    {
        path: 'http://services.brazuca.online/comfb',
        text: 'Comunidade do Facebook',
        icon: <FaUsers className="br-serv__items--icons" />
    },
    {
        path: 'http://services.brazuca.online/consulado',
        text: 'Consulados Brasileiros',
        icon: <FaRegBuilding className="br-serv__items--icons" />
    },
    {
        path: 'http://services.brazuca.online/radios',
        text: 'Radios Brasileiras',
        icon: <RiRadioLine className="br-serv__items--icons" />
    },
    {
        path: 'http://services.brazuca.online/bancos',
        text: 'Bancos Brasileiros',
        icon: <RiBankLine className="br-serv__items--icons" />
    },
    {
        path: 'http://services.brazuca.online/servicos/teste-online-para-tirar-o-permit',
        text: 'Teste de Motorista',
        icon: <FaCarSide className="br-serv__items--icons" />
    },
    {
        path: 'http://services.brazuca.online/graphics',
        text: 'Gráficos',
        icon: <FaRegImages className="br-serv__items--icons" />
    },
]

export const useLinks = [
    {
        path: '/help',
        text: 'Help'
    },
    {
        path: '/term',
        text: 'Term of Use'
    },
    {
        path: '/privacy',
        text: 'Privacy Police'
    },
    {
        path: '/community',
        text: 'Community Guidelines'
    },
]