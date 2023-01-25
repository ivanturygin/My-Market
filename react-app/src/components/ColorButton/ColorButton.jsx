import './ColorButton.css';

function ColorButton(props) {
	
	const {color,actived, ...restProps} = props;

	const className = `square-image ${actived? "square-image_enabled" : ""}`;
	
return (
        <button {...restProps} className={className}>
			 
		<img className="square-image__img" src={color.image} alt={color.alt}/>

			</button>
		
)

};


export default ColorButton;