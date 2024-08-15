import Footer from '../../components/Footer';
import LoginCard from '../../components/LoginCard';
import './style.css'

function Login() {

    return (
        <>
            <main>
                <div>
                    <img src="../../src/assets/casajorginho.svg" alt="Logotipo da Casa Jorginho" className='logoCasaJorginho'/>
                    <LoginCard/>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default Login;