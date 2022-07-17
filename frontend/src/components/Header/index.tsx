import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return(
        <header>
        <div className="ldszmeta-logo-container">
            <img src={logo} alt="LDSZMeta" />
            <h1>LDSZMeta</h1>
            <p>
              Desenvolvido juntamente com
              <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
            </p>
        </div>
    </header>
      
    )
  }
  
  export default Header