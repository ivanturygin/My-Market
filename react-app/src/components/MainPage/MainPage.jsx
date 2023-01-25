import Links from "../Links/Links"
import './MainPage.css'

function MainPage() {

	return (
		

<div className ="section-content">

	<div className="section-content__text">
					Здесь должно быть содержимое главной страницы.<br></br>
					Но в рамках курса главная страница  используется лишь<br></br>
					в демонстрационных целях
	</div>

<div className="section-content__link">

	<Links linkUrl="/product" linkName="Перейти на главную страницу товара"/>

</div>
</div>

	);
}


export default MainPage;