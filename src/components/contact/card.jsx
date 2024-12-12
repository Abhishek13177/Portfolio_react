import "./contact.css"


function Card(props)
{
    return(
        <div className="c-card popin">
            {props.icon && <props.icon size={25} className="contact-icon"/>}
            <p className="p1">{props.detail1}</p>
            <p className="p2">{props.detail2}</p>
        </div>
    );
}
export default Card;