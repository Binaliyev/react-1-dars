export const Modal = (props) =>{
    return(
        <>
        <h1>{props.value}</h1>
        {props.children}
        </>
    )
}