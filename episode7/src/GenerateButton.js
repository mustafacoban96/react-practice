export const GenerateButton = (props) =>{
    return (
        <div class="generate-area">
            <button onClick={() => props.dataFetch()}>X</button>
           <p>{props.fact}</p>
        </div>
    )
}