import pizza from "../../assets/images/pizza.png"
import menuItem from "../../models/cardapio"
import CardapioList from "../../components/Cardapio/index."
import Banner2 from "../../components/Banner2"
import Hero from "../../components/Hero"
import { useParams } from 'react-router-dom'

import { Participante } from '../Home'

import { useEffect, useState } from "react"
import ShowCard from "../../components/ShowCard"
import Principal from "../../components/Modal"

const Menu = () => {
    const { id } = useParams()

    const [advice, setAdvice] = useState([]);
    useEffect(() => {
        // const url = "https://fake-api-tau.vercel.app/api/efood/restaurantes/1";
        const url = `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`;
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            // console.log(json.cardapio);
            setAdvice(json.cardapio);
          } catch (error) {
            console.log("error", error);
          }
        };
        fetchData();
    }, []);

    // const [itensDoMenu, setItensDoMenu] = useState<Participante[]>([])

    // useEffect(() => {
    //     fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/1')
    //     .then((res) => res.json())
    //     .then((res) => setItensDoMenu(res))
    // }, [])
    
    return (
        <>
            <Banner2 />
            <Hero />
            {/* <CardapioList itensCardapio={advice}/> */}
            <Principal itensCardapio={advice}/>
        </>
    )
}

export default Menu