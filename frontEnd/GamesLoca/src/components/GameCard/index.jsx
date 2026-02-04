import "../GameCard/styles.css"

function GameCard ({nome}) {
    return (
        <div className="game-card">
            <div className="game-image-placeholder">
         {/* Espaço para imagem futuramente */}
            </div>
            
            <div className="game-content">
                <h3>{nome}</h3>
                <span className="tagOn">Disponivel</span>

                <button className="details-button">Ver detalhes</button>
            </div>  
        </div>
    )
}

export default GameCard