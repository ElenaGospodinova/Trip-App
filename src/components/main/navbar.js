import { useState } from 'react';




function Navbar() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };
  // const [toggleMenu, setToggleMenu] = useState(false);
  // const handleToggleMenu = () => {
  //   setToggleMenu(!toggleMenu);
  // };

  return (
    <nav>
{/*    
    <button onClick={handleToggleMenu} className='btn'>Menu</button> */}
    {/* <img src={Elanny_G} alt='logo' /> */}
      {/* <div className="logo"><img src={eG_Map}   /></div> */}
      {/* <button className="menu-button" onClick={toggleMenu}>
        {isMenuOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}> */}
     {/* {toggleMenu &&  <ul> */}
        
         <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">London Timeout</a></li>
        <li><a href="#">Restaurants & Bars</a></li>
      </ul>
    </nav>
  );
}


export default Navbar;