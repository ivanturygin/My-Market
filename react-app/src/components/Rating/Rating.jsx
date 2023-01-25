import './Rating.css';

function Rating(props) {

	const{stars} = props;

	const maxRaig = 4;
	const arr = [];

	for (let i = 0; i <= maxRaig; i++) {
		if (i <= stars) {
			arr.push(true);
		} else {
			arr.push(false);
		}
	}

	
	return (
		<div>
			{arr.map((item,index) => {
				if (item) {
					return <img key={`star${index}`} className='rating__img' src="./Image/starTwo.png" alt="star" />
				} else {
					return <img key={`star${index}`} className='rating__img' src="./Image/starOne.png" alt="starNo" />
				}
			})
			}
		</div>

				)
}

export default Rating;