import './Navbar.scss'
import logo from '../../assets/digital.svg'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import Buscador from '../../etx/Buscador'

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                
                <img className='imgLogo' src={logo} alt='LOGO'/>

                <nav className="navbar">
                    <Link to='/' className="navbar__link">Inicio</Link>
                    <Link to='/productos/entradas' className="navbar__link">Entradas</Link>
                    <Link to='/productos/menu-extra' className="navbar__link">Menus Extra</Link>
                    <Link to='/productos/menu-completo' className="navbar__link">Menu Completo</Link>
                    <Link to='/nosotros' className="navbar__link">Nosotros</Link>
                    
                    <Buscador />
                </nav>
                <CartWidget />
            </div>

           
        </header>
    )
}
