import {useState} from "react";
import MemoryButton from "./../MemoryButton/MemoryButton";
import './SectionMemory.css';
import memorys from "../../data/memorys";




function SectionMemory(props) {
	const[activeMemory,setActiveMemory]=useState(1);
	
	let resultName = memorys.map(i => i.name);
	let memoryName = resultName[activeMemory -1];

	function handleClick (e,id) {
		setActiveMemory(id)
	};

	return (

		<div className="section-memory">
			<div className="section-memory__conteiner">
				<h3 className="section-memory__title">Конфигурация памяти:{`${memoryName}`} </h3>
				<div className="section-memory__list">
					<div className="square-button">
						
					{memorys.map((memory) => {

					return(
						<MemoryButton key = {memory.id} 
						memory={memory} 
							actived={memory.id === activeMemory}
						onClick={(e) => handleClick(e,memory.id)}
						/>

					)
					})}

					</div>
				</div>
			</div>
		</div>

	)
	
};





export default SectionMemory;













