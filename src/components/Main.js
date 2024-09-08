import pointer from '../images/pointer.png'

export default function Main(props) {
    return (
        <section className='main'>
            <img alt='' className='main-place-img' src={props.img}></img>
            <div>
                <div className='main-div'>
                    <img alt='pointer' src={pointer}></img>
                    <p>{props.country} </p>
                    <a href={props.link} target='_blank' rel='noreferrer'>Ver en Google Maps</a>
                </div>
                <h1>{props.place}  </h1>
                <h5>{props.date}</h5>
                <p className='main-text'>{props.description}</p>
            </div>
        </section>
    )
}