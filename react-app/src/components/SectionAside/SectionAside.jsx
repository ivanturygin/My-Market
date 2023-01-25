import './SectionAside.css'
import { addProduct, deleteProduct } from "./../../reducers/cart-reducer";
import { addFavorite, deleteFavorite } from '../../reducers/favorite-reducer';
import { useDispatch } from "react-redux";
import productData from './../../data/product';
import { useSelector } from "react-redux";

function SectionAside() {

	const products = useSelector((store) => store.cart.products);

	const dispatch = useDispatch();

	localStorage.setItem("cartProduct", JSON.stringify(products))

	const inCart = products.some((prevProduct) => {
		return prevProduct.id === products.id;
	});

	function handleAddCart (e, productId) {
		dispatch(addProduct(productId));
	};

	function handleDelCart(e, productId) {
		dispatch(deleteProduct(productId));
	};

	const favoriteProduct = useSelector((store) => store.favorite.favoritsProduct);

	localStorage.setItem("favoritProduct", JSON.stringify(favoriteProduct))

	const inFavorite = favoriteProduct.some((prevProduct) => {
		return prevProduct.id === products.id;
	});

	function handleAddFavorite(e, productId) {
		dispatch(addFavorite(productId));
	};

	function handleDelFavorite(e, productId) {
		dispatch(deleteFavorite(productId));
	};


	return (
		<div>
			<div className="section-aside">

				<div className="section-order">
					<div className="section-order__conteiner">
						<div className="section-order__inner">
							<div className="section-order__top">
								<div className="price-box">

									<div className="price-old">
										<p className="price-old__text">75 990₽</p>

										<div className="price-discount">
											<div className="price-discount__text">-8%</div>
										</div>
									</div>

									<div className="price-new">
										<p className="price-new__text">67 990₽</p>
									</div>
								</div>
								<div className="favorites">
									{inFavorite ? (<button className="favorites__btn_active" onClick={(e) => handleDelFavorite(e, productData.id)}></button>) :
										(<button className="favorites__btn" onClick={(e) => handleAddFavorite(e, productData.id)}></button>)}
							
								</div>
							</div>

							<div className="delivery">
								<p className="delivery__text">Самовывоз в четверг, 1 сентября <b> — бесплатно</b></p>
								<p className="delivery__text">Курьером в четверг, 1 сентября <b>— бесплатно</b></p>
							</div>

							<div className="basket">
								{inCart ? (<button className="basket__button_active"  onClick={(e) => handleDelCart(e, productData.id)}>Товар уже в корзине</button>) :
								(<button className="basket__button" onClick={(e) => handleAddCart(e, productData.id)}>Добавить товар</button>)}
							</div>
						</div>
					</div>
				</div>

				<div className="section-frame section_none ">
					<p className="section-frame__ads">Реклама</p>

					<div className='section-frame__conteiner'>
						<iframe className='frame' src="./ads/indexads.html" title ='ads'></iframe>
					</div>

					<div className='section-frame__conteiner'>
						<iframe className='frame' src="./ads/indexads.html" title='ads'></iframe>
					</div>

				</div>

			</div>
		</div>
		
	)

}

export default SectionAside;
