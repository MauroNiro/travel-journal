export default function Main(props) {
    return (
        <section className="main">
            <img className="main-place-img" src={props.img}></img>
            <div>
                <div className="main-div">
                    <img src="https://cdn.discordapp.com/attachments/961634737187872771/1281657721799839816/image.png?ex=66dc8444&is=66db32c4&hm=4893b2b3e77e0f33d055c3540503d3044b3340e5d95b0bd311107151574dde32&"></img>
                    <p className="main-country" >{props.country} </p>
                    <a href={props.link} target="_blank" rel="noreferrer">Ver en Google Maps</a>
                </div>
                <h1 className="main-place">{props.place}  </h1>
                <h5 className="main-date">{props.date}</h5>
                <p className="main-text">{props.description}</p>
            </div>
        </section>
    )
}