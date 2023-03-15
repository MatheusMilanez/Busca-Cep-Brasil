import './Footer.css'
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container-footer'>
                <h2 className='titulo-footer'>Desenvolvedor</h2>
                <ul className='ul-footer'>
                    <li>Matheus Milanez</li>
                </ul>
            </div>

            <div className='container-footer'>
                <h2 className='titulo-footer'>Contato</h2>
                <ul className='ul-footer'>
                    <li>matheusmmlopes19@gmail.com</li>
                </ul>
            </div>

            <div className='container-footer'>
                <h2 className='titulo-footer'>Redes sociais</h2>
                <ul className='ul-footer'>
                    <li className='li-footer'><AiFillInstagram /></li>
                    <li className='li-footer'><AiFillLinkedin /></li>
                    <li className='li-footer'><AiFillYoutube /></li>
                </ul>
            </div>
        </footer>
    )
}


export default Footer