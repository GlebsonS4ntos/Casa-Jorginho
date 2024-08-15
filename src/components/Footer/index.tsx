import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer>
            <div className='footer container'>
                <div className='DireitosReservados'>
                    <img src="../../src/assets/inspa.png" alt="Logotipo do INSPA responsável pelo desenvolvimento da aplicação." className='logoInspa' />
                </div>
                <div className='redesSociais'>
                    <a href="" target='_blank'>
                        <FontAwesomeIcon icon={faInstagram} className='icon' />
                    </a>
                    <a href="" target='_blank'>
                        <FontAwesomeIcon icon={faFacebook} className='icon' />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;