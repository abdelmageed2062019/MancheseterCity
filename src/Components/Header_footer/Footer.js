import { CityLogo } from "../Utils/tools"

const Footer = () => {
    return(
        <footer className="bck_blue">
            <div className="footer_logo">
                <CityLogo
                    link={true}
                    linkTo={'/'}
                    width="70px"
                    height="70px"
                />
            </div>
            <div className="footer_descl">
                Manchester City 2021.
            </div>
        </footer> 
    )
}

export default Footer;
