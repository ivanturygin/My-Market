import {Link} from 'react-router-dom'
import {useSelector} from "react-redux";
import './Header.css'

function Header(props) {
  const count = useSelector((state) => state.cart.products.length);
  const countFavorite = useSelector((state) => state.favorite.favoritsProduct.length);

  return (
    <div className="header">
        <div className="header-conteiner">
          <div className="header__inner">
            <Link to={"/"} className="header-wrap">
            <div className="header__logo">
                <div className="header__img" ></div>
              </div>
              <div className="header__name">
                <h1 className="header__title"><span className="header__color">Мой</span>Маркет</h1>
              </div>
            </Link>
            <div className="header__icon">

              <div className="header-basket">
                <button className="header-basket__btn"></button>
              {count === 0 ? " " : <div className="header-basket__counter"><span className="header-basket__number">{count}</span></div>}
              </div>

              <div className="header-favorites">
                <button className="header-favorites__btn"></button>
              {countFavorite === 0 ? " " :<div className="header-favorites__counter"><span className="header-favorites__number">{countFavorite}</span></div>}
              </div>

            </div>
          </div>
        </div>
    </div>
  );
}

export default Header;
