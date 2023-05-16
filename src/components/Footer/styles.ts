import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
    background-color: ${cores.claro};
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 298px;
`

export const Social = styled.div`
    margin-top: 40px;

    img {
        margin-left:8px;
    }
`

export const Disclaimer = styled.p`
    font-size: 10px;
    margin-top: 80px;
    width: 480px;
    text-align: center;
`

export const Logo = styled.img`
    margin-top: 40px;
`