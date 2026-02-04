import Hero from "./components/hero"
import GameCard from "../../components/GameCard/index"
import "../Home/index.css"

function Home (){
    return (
        <div className="home-container">
            <Hero />

            <section className="recent-games-section">
                <div className="section-header">
                <h2>Jogos adicionados recentemente</h2>
                <p>Confira os lançamentos da loja!</p>
                </div>

                <div className="games-grid">
                    <GameCard nome= "God Of War" preco = "5,00" />
                    <GameCard nome= "Elden Ring" preco = "5,00" />
                    <GameCard nome= "Red Dead Redemption 2" preco = "5,00" />
                </div>
            </section>
        </div>
    )
}

export default Home
