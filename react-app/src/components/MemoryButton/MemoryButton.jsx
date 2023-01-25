import './MemoryButton.css';


function MemoryButton(props) {
const {memory,actived, ...restPops} = props;
	const className = `square-button__btn ${actived? "square-button__btn_enabled" : ""}`
	return (
		<button {...restPops} className={className} >
				<span className="square-button__text">{`${memory.name}`} </span>
		</button >
		
	)

}

export default MemoryButton;


