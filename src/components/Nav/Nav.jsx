import Logo from '../../assets/images/logo.png'
import '../Nav/Nav.css'

export function Nav(){
  return (
    <nav>
      <img className='logo' src={Logo} alt='logo'/>

      <ul className='header-menu'>
        <li className='header-menu-item'>Quem somos</li>
        <li className='header-menu-item'>Nosso propósito</li>
        <li className='header-menu-item'>Suporte</li>
      </ul>
      
    </nav>
  );
}