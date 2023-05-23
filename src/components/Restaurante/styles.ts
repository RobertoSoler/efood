import styled from "styled-components";
import { cores } from '../../styles'

export const Card = styled.div`
    background-color: ${cores.branco};
    position: relative;
    border-style: solid;
    border-width: 1px;
    border-color: #E66767;
    margin-top: 32px;
    margin-bottom: 32px;

    > img {
        width: 472px;
        height: 217px;
    }
`

export const LinhaInfo = styled.div`
    display: flex;

    img {
        margin-left: 8px;
    }
`

export const Titulo = styled.h3`
    font-weight: bold;
    display: block;
    margin-left: 8px;
    width: 386px;
`

export const Nota = styled.h3`
    font-weight: bold;
    margin-left: 8px;
`

export const Descricao = styled.p`
    margin-top: 24px;
    margin-bottom: 16px;
    font-size: 14px;
    display: block;
    margin-left: 8px;
    margin-right: 8px;
`

export const CategTag = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    background-color: ${cores.vermelho};
    color: ${cores.branco};
    font-size: 12px;
    font-weight: bold;
    padding: 6px 4px;
`

export const GoTag = styled.div`
    // top: 16px;
    // right: 16px;
    background-color: ${cores.vermelho};
    font-size: 14px;
    padding: 6px 4px;
    width: 82px;
    text-align: center;
    margin-left: 8px;
    margin-bottom: 8px;
    cursor: pointer;

    a {
        color: ${cores.branco};
    }
`