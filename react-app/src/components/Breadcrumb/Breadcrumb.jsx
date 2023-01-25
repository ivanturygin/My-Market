import './Breadcrumb.css'
import Links from '../Links/Links';

function Breadcrumb(props) {
	return (
		<div>
			<div className="breadcrumb">
				<div className="breadcrumb__conteiner">
					<nav className="breadcrumb__list">
	
						<Links linkUrl="/" linkName="Электроника"/>
						<span className="breadcrumb__separator">&gt;</span>
						<Links linkUrl="/" linkName="Смартфоны и гаджеты"/>
						<span className="breadcrumb__separator">&gt;</span>
						<Links linkUrl="/" linkName="Мобильные телефоны"/>
						<span className="breadcrumb__separator">&gt;</span>
						<Links linkUrl="/" linkName="Apple"/>
						
					</nav>
				</div>
			</div>
		</div>
	)

}

export default Breadcrumb;
