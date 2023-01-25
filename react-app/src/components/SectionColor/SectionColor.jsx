import { useState } from 'react';

import './SectionColor.css';

import ColorButton from "./../../components/ColorButton/ColorButton";

import colors from "./../../data/color";

function SectionColor() {

	const [activeColor,setActiveColor] = useState(4);

	let resultName = colors.map(i => i.name);
	let ColorName = resultName[activeColor - 1];

	function handleClick (e,id){
		setActiveColor(id);
	}

	return (

<div className="section-color">
	<div className="section-color__conteiner">
				<h3 className="section-color__title">Цвет товара: {`${ColorName}`}</h3>

				<div className="section-color__list">
            
					{colors.map((color) => {

						return(

							<ColorButton key={color.id} 
							color = {color} 
							actived={color.id === activeColor}
							onClick={(e) => handleClick(e,color.id)}
								/>

						)

					})}

					</div>
		
	</div>
</div>
	)
};


export default SectionColor;