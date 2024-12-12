import "./footer.css"
import { FaRegCopyright } from "react-icons/fa";

function Footer()
{
    const year=new Date().getFullYear();
    return(
        <div className="footer">
            <p>Copyright&copy; {year}, <span>&nbsp;Abhishek </span> All Rights Reserved.</p>
        </div>
    );

}

export default Footer;