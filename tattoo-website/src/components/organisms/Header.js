import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import '../../styles/Header.css';

function Header() {

    let menuItem1 = "Home";
    let menuItem2 = "Portfolio";
    let menuItem3 = "My Story";
    let headerCTAText = "Enquire";

    let [isCloseIconVisible, setIsCloseIconVisible] = useState(false);
    let [isMenuIconVisible, setIsMenuIconVisible] = useState(true);
    let [menuIconDisplayClass, setMenuIconDisplayClass] = useState('block')
    let [closeIconDisplayClass, setCloseIconDisplayClass] = useState('hidden')


    function ToggleMobileMenuIcons() {
        if (isMenuIconVisible) {
            setIsMenuIconVisible(!isMenuIconVisible);
            setIsCloseIconVisible(!isCloseIconVisible);
            setMenuIconDisplayClass('hidden');
            setCloseIconDisplayClass('block')
        } else {
            setIsMenuIconVisible(!isMenuIconVisible);
            setIsCloseIconVisible(!isCloseIconVisible);
            setMenuIconDisplayClass('block');
            setCloseIconDisplayClass('hidden');
        }
    }

    return (
        <div className='relative black-background' >
            <div className='mobile-logo-menu-container'>
                <div className={ menuIconDisplayClass + ' mobile-logo'}> 
                    <div> Ari Rivera Tattoo Studio</div>
                </div>
                <div className='mobile-menu-icons'>            
                    <button className={ closeIconDisplayClass } onClick={() => { ToggleMobileMenuIcons() }}>
                        <CloseIcon sx={{ fontSize: { xs: 28, md: 20 }, color: 'whitesmoke'}}/>
                    </button>
                    <button className={ menuIconDisplayClass } onClick={() => { ToggleMobileMenuIcons() }}>
                        <MenuIcon sx={{ fontSide: { xs: 28, md: 20 }, color: 'whitesmoke'}} />
                    </button>
                </div>
            </div>

            <div className={ closeIconDisplayClass + ' header-parent-container mobile-header'} >
                <div className='header-contents'>
                    <div className='menu-items-container'>
                        <div className='menu-items'>
                            <div> 
                              <button>
                                <a href={ '#' + menuItem1}> { menuItem1 }  </a>
                            </button>  
                            </div>
                            <div> 
                                <button>
                                    <a href={'#' + menuItem2}> { menuItem2 }</a>
                                </button> 
                            </div>
                            <div> 
                                <button>
                                    <a href={'#' + menuItem3}> { menuItem3 }  </a>
                                </button>
                            </div>
                        </div>
                        <div>  
                            <button> 
                                <a href="#social-links" className="enquire-btn"> {  headerCTAText } </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='desktop-header header-parent-container'>
                <div className='header-contents'>
                    <div className='logo-container'> 
                        <div> Ari </div>
                        <div> Rivera </div>
                        <div> Tattoo Studio </div>
                    </div>
                    <div className='menu-items-container'>
                        <div className='menu-items'>
                            <div> 
                              <button>
                                <a href={ '#' + menuItem1}> { menuItem1 }  </a>
                            </button>  
                            </div>
                            <div> 
                                <button>
                                    <a href={'#' + menuItem2}> { menuItem2 }</a>
                                </button> 
                            </div>
                            <div> 
                                <button>
                                    <a href={'#' + menuItem3}> { menuItem3 }  </a>
                                </button>
                            </div>
                        </div>
                        <div>  
                            <button> 
                                <a href="#social-links" className="enquire-btn"> {  headerCTAText } </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;