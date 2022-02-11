import { Link } from "react-router-dom";
import { HeaderDiv } from "./style"
export function Header() {
    return (
        <HeaderDiv>
            <div className="container">
                <ul>
                    <li><Link to="/">خانه</Link></li>
                    <li><Link to="/about-me">درباره من</Link></li>
                    <li><Link to="/contact-me">تماس با من</Link></li>
                </ul>
            </div>
        </HeaderDiv>
    );
}