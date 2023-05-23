import Banner from "../../components/Banner"
import RestaurantList from "../../components/RestaurantList"
import { useEffect, useState } from "react"

export type Participante = {
    id: number;
    titulo: string;
    destacado: boolean;
    tipo: string;
    avaliacao: number;
    descricao: string;
    capa: string;
    cardapio: CardapioItem[];
  };

export type CardapioItem = {
    foto: string;
    preco: number;
    id: number;
    nome: string;
    descricao: string;
    porcao: string;
  };

// export type Participante = {
//     id: number
//     titulo: string
//     destacado: boolean
//     tipo: string
//     avaliacao: number
//     descricao: string
//     capa: string
//     cardapio: 
//     [
//         {
//             foto: string
//             preco: number
//             id: number
//             nome: string
//             descricao: string
//             porcao: string
//         }
//     ]
// }

const Home = () => {

    const [restaurantes, setRestaurantes] = useState<Participante[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        .then((res) => res.json())
        .then((res) => setRestaurantes(res))
    }, [])

    return (
        <>
            <Banner />
            <RestaurantList participantes={restaurantes} />
        </>
    )
}

export default Home