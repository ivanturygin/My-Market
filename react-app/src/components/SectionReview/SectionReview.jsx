import Review from "./../Review/Review";
import './SectionReview.css';

function SectionReview() {
	return (
		<div className="section-rewiew">

			<div className="section-rewiew__conteiner">

				<div className="section-rewiew__header">
					<h3 className="section-review__title">Отзывы</h3>
					<span className="section-review__number">425</span>

				</div>

				<Review/>

				</div>

				</div>
	)

}

export default SectionReview;
