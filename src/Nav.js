import logo from  './assets/logo.svg';

function Nav() {
    return (
        <>
            <article className="container">
                <nav>
                    <ul>
                        <img src= {logo} />
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#order">Order Online</a></li>
                        <li><a href="#reserve">Reservations</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </nav>
            </article>
        </>
    )
}
export default Nav;