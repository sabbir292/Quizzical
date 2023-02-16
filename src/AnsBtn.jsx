export default function AnsBtn(props){
    const styles = {backgroundColor : props.isSelected? "green":''}
    // console.log(props.id)
    return(
        <button 
            className="ansBtn"
            name={props.id}
            key={props.id}
            onClick = {props.handleClick}
            style = {styles}
        >{props.options}</button>
    )
}