import Banner from "../../components/Banner"
import Footer from "../../components/Footer"
import RestaurantList from "../../components/RestaurantList"
import Fornecedor from "../../models/fornecedores"
import sushi from "../../assets/images/sushi.png"
import pasta from "../../assets/images/pasta.png"

const empresas: Fornecedor[] = [
    {
        id: 1,
        title: 'Hioki Sushi',
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        category: 'Japonesa',
        nota: "4.5",
        image: sushi
    },
    {
        id: 2,
        title: 'La Dolce Vita Trattoria',
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        category: 'Japonesa',
        nota: "4.5",
        image: pasta
    },
    {
        id: 3,
        title: 'La Dolce Vita Trattoria',
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        category: 'Japonesa',
        nota: "4.5",
        image: pasta
    },
    {
        id: 4,
        title: 'La Dolce Vita Trattoria',
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        category: 'Japonesa',
        nota: "4.5",
        image: pasta
    },
    {
        id: 5,
        title: 'La Dolce Vita Trattoria',
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        category: 'Japonesa',
        nota: "4.5",
        image: pasta
    },
    {
        id: 6,
        title: 'La Dolce Vita Trattoria',
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        category: 'Japonesa',
        nota: "4.5",
        image: pasta
    }
]


const Home = () => (
    <>
      <Banner />
      <RestaurantList participantes={empresas}/>
      <Footer />
    </>
)

export default Home