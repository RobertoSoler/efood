import styled from "styled-components";
import { cores } from '../../styles'

export const Card = styled.div`
    background-color: ${cores.vermelho};
    position: relative;
    border-style: solid;
    border-width: 1px;
    border-color: #E66767;
    margin-top: 32px;
    margin-bottom: 32px;
    align-items: center;

    img {
        width: 304px;
        height: 167px;
        padding: 8px 8px;
        width: 100%;
    }
`

export const Titulo = styled.h3`
    font-size: 16px;
    font-weight: bold;
    display: block;
    margin-left: 8px;
    color: ${cores.claro};
`

export const Descricao = styled.p`
    margin-top: 24px;
    margin-bottom: 16px;
    font-size: 14px;
    display: block;
    margin-left: 8px;
    margin-right: 8px;
    color: ${cores.claro};
    height: 120px; 
`

export const GoTag = styled.div`
    background-color: ${cores.claro};
    color: ${cores.vermelho};
    font-size: 14px;
    text-align: center;
    margin-left: 8px;
    margin-bottom: 8px;
    margin-right: 8px;
    text-align: center;
    padding: 8px 8px;
    width: 95%;
    cursor: pointer;
`