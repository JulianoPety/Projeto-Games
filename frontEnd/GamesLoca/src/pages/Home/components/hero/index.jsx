import "../hero/styles.css"

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Alugue seus jogos favoritos aqui!</h1>
                <p>
                    Tenha acesso aos melhores jogos sem precisar comprar.
                    Alugue, Jogue e divirta-se!
                </p>
        
                <div className="hero-buttons">
                    <button className="primary">Explorar jogos</button>
                    <button className="secondary">Como funciona</button>
                </div>

                <div className="hero-image">

                </div>
            </div>
        </section>
    )
}

export default Hero;