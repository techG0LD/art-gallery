export default function ButtonBar(props){
    return (
        // <h1>ButtonBar</h1>
        <nav>
            <button value={-5} onClick={props.updateID}>Way Back</button>
            <button value={-1} onClick={props.updateID}>Back</button>
            <button value={1} onClick={props.updateID}>Next</button>
            <button value={5} onClick={props.updateID}>Big Next</button>
        </nav>
    )
}