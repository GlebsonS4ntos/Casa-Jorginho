import './style.css';

function LoginCard() {
    return (
        <section>
            <div className='card'>
                <div>
                <form>
                    <div className="mb-3">
                        <label htmlFor='InputCpf' className="form-label">CPF: </label>
                        <input type="text" className="form-control" id="InputCpf"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor='InputPassword'>Senha: </label>
                        <input type="password" className="form-control" id="InputPassword" />
                    </div>
                    <button type="submit" className="btn btn-primary large-button">Login</button>
                </form>
                </div>
            </div>
        </section>
    );
}

export default LoginCard;