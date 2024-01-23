import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LowerHeader from './LowerHeader';

function Header() {
  return (
    <div>
      <div className='header'>
      <img
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt=""
					className="header__logo"
       />
       <div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>
       <div className='header__nav'>
        <div className='header__option'>
          <span className="header__optionLineOne">Hello Guest</span>
						<span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className='header__option'>
          <span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">&Orders</span>
        </div>
        <div className='header__option'>
            <span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
        </div>
       <div className="header__optionBasket">
						<ShoppingBasketIcon />
						<span className="header__optionLineTwo header__basketCount">
							0
						</span>
					</div>

       </div>
    </div>
    <LowerHeader />
      
    </div>
  )
}

export default Header