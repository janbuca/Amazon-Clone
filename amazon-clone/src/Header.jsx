import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LowerHeader from './LowerHeader';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  // const navigate = useNavigate();
  const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};

  return (
    
    <div>
      <div className='header'>
        <Link to={"/"}>
        <img
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt=""
					className="header__logo"
       />
        </Link>
      
       <div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>
       <div className='header__nav'>
       <Link to={!user && "/login"} className="header__clearlink ">
					<div onClick={handleAuthentication} className="header__option">
						<span className="header__optionLineOne">
							Hello {!user ? "Guest" : user?.email}
						</span>
						<span className="header__optionLineTwo">
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>
  
        <div className='header__option'>
          <span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">&Orders</span>
        </div>
        
        <div className='header__option'>
            <span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to={"./Checkout"}>
        <div className="header__optionBasket">
						<ShoppingBasketIcon />
						<span className="header__optionLineTwo header__basketCount">
            {basket.length}
						</span>
					</div>
        </Link>
       

       </div>
    </div>
    <LowerHeader />
      
    </div>
  )
}

export default Header