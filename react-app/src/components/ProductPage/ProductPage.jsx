
import Breadcrumb from "../Breadcrumb/Breadcrumb";

import SectionImage from "../SectionImage/SectionImage";

import SectionTop from "../SectionTop/SectionTop";

import SectionReview from "../SectionReview/SectionReview";

import SectionForm from "../SectionForm/SectionForm";

import './ProductPage.css'

function ProductPage() {
	return (
		<div>
			<div>

				<div className="section-main" >

					<Breadcrumb />

					<SectionImage />

					<SectionTop />

					<SectionReview />

					<SectionForm />

				</div>
			</div>
		</div>
	);
}


export default ProductPage;