import worldimg from '../images/world-image.png'

export default function NavBar() {
    return (
        <nav className='nav'>
            <img className='nav-image' alt='world-image' src={worldimg}></img>
            <p>Mi diario de viaje.</p>
        </nav>
    )
}