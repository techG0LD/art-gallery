export default function Gallery(props){
    return (
        // <h1>Gallery</h1>
        <div>
        <h1>{props.title}</h1>
        <h2>By: {props.artistDisplayName}</h2>
        <p>{props.medium}</p>
        <p>{props.culture}</p>
        <img style={{width: '80vw'}} src={props.primaryImage} alt={props.title}></img>
        </div>
        


    )
}