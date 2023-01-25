import './SectionImage.css'

function SectionImage() {
	return (
		<div>

			<div className="title">
				<div className="product-title__conteiner">
					<h2 className="product-title__title">Смартфон Apple iPhone 13,синий</h2>
				</div>
			</div>

			<div className="section-image">
				<div className="section-image__conteiner">
					<div className="section-image__list">
						<img className="section-image__img" src="Image/image1.webp" alt='iphone13'/>
						<img className="section-image__img" src="Image/image2.webp" alt='iphone13' />
						<img className="section-image__img section_none" src="Image/image3.webp" alt='iphone13' />
						<img className="section-image__img section_none" src="Image/image4.webp" alt='iphone13' />
						<img className="section-image__img section_none" src="Image/image5.webp" alt='iphone13' />
					</div>
				</div>
			</div>
			
			</div>

	)

}

export default SectionImage;