import Logo from "../../assets/Logo.png"
import style from './style.css'

export const Header = () =>{
    return (
        <header>   
            <div>
                <div className="logo">
                    <a href="#">
                        <img src={Logo} alt="Logo"/>
                    </a>
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </header>
    )
}