import { BiSolidBookBookmark } from "react-icons/bi";
import "./experience.css"

function ExperienceSubcard(props)
{
    return(
        <>
            <div className="subcard-container popin">
                <div className="book-icon">
                    <BiSolidBookBookmark size={25}/>
                </div>
                <div className="subcard-detail-box">
                    <p className="detail1">{props.date}</p>
                    <p className="detail2">{props.clg}</p>
                    <p className="detail3">{props.course}</p>
                    <p className="detail4">{props.cgpa}</p>
                </div>
            </div>
        </>
    );
}

export default ExperienceSubcard;