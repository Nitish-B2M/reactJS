import './navbars.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

export const Navbars = () => {
    return(
        <div className='navbar'>
            <div className="logo">
                <div className="company_name">NY-OFFICIAL</div>
            </div>
            <div className="navbar_menu">
                <ul>
                    <li className='listting_menu'><a href="#">Menu</a></li>
                    <li className='listting_menu'><a href="#">About</a></li>
                    <li className='listting_menu'><a href="#">Contact us</a></li>
                    <li className='listting_menu'><a href="#">More</a></li>
                </ul>
            </div>
            <div className='login-css'>
                <div className="user">
                    <a href='#'>Login</a>
                </div>
                <div className="fa">
                    {/* <FontAwesomeIcon icon="fa-regular fa-user" /> */}
                </div>  
            </div>
        </div>
    );
}
