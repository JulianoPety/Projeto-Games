import "./styles.css";
import logo from "../../assets/logo.png"

function Header() {
    return(
        <header className="header">
            <nav className="nav">
                <div className="logo" >
                    <img src={logo} alt="Logo "/>
                </div>
        
                <ul className="button-list">
                    <li><a href="">Início</a></li>
                    <li><a href="">Jogos</a></li>
                    <li><a href="">Como funciona</a></li>
                    <li><a href="">Nossas lojas</a></li>
                </ul>
        
                <a href="#" className="login-button">Login</a>
            </nav> 
        </header>
    )
}

export default Header