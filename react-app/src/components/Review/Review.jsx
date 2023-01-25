import './Review.css';

import reviewsData from "../../data/reviewsData";

import Rating from '../Rating/Rating';

function Review(props) {

	return (
					<div>
			{reviewsData.map((review) => {
				let revLeng = reviewsData.length - 1;
				let sepActiv = review === reviewsData[revLeng];
				let stars = review.grade -1;

				return (
					<div key={review.name}>
						
							<div className="section-rewiew__wrap">

								<div className="section-review__top">

									<div className="section-review__image">
										<img className="section-review__img" src={review.photo} alt="Фото Марк Г."/>
									</div>

									<div className="section-review__item">

										<h3 className="section-review__item-title">{`${review.name}`}</h3>

										<div className="section-review__reiting">

											<Rating stars={stars}/>

										</div>
								</div>
							</div>

							<div className="section-review__content">

								<div className="section-review__block"></div>

										<div className="section-review__text-wrap">
												<div className="section-review__text">
													<span className="section-review__text-title"> Опыт использования:</span> 
													{`${review.experience}`}
												</div>

								<div className="section-review__text">
									<span className="section-review__text-title">Достоинства:</span> 
									{`${review.dignity}`}
									</div>

								<div className="section-review__text">
									<span className="section-review__text-title">Недостатки:</span> 
										{`${review.flaws}`}
										</div>
								</div>
						</div>
					</div>

						<div className={`${sepActiv ? "" : "hr-block"}`} >
							<div className={`${sepActiv ? "" : "hr-block__hr"}`}></div>
						</div>
						</div>
				)
			})}
					</div>
				)}

export default Review;



