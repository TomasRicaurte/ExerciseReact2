import img from "../src/assets/react.svg"

export function Card(props) {
    return (
        <>
        <h1 className="Nombre">{props.name}</h1>
        <img src={props.img} alt="" />
        <p className="Foto">Foto de perfil</p>
        <p className="Edad">{props.age}</p>
        <button className="Boton">{props.button}</button>
        </>    
    )
}