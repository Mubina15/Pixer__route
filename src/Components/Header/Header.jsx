import React from 'react'
import "./Header.css"
import Pixer from "../../Assets/img/Pixer.svg"
import { Link } from 'react-router-dom';


export const Header = () => {

    return (
        <header>

            <div className="container">
                <div className="header__div">
                    <a href="#">
                        <img src={Pixer} alt="logo" width="58" height="20" />
                    </a>


                    <ul className='list'>
                        <Link className="link" to={"/"}>Bosh sahifa</Link>
                        <Link className="link" to={"/Xizmatlar"}>Xizmatlar</Link>
                        <Link className="link" to={"/portfolio"}>Portfolio</Link>
                        <Link className="link" to={"/jamoa"}>Jamoa</Link>
                        <Link className="link" to={"/blog"}>Blog</Link>
                        <Link className="link" to={"/kontakt"}>Kontaktlar</Link>
                    </ul>

                    <a className="number" href="+99890923711">
                        +998 90 921 37 11
                    </a>

                </div>
            </div>



        </header>
    )
}
