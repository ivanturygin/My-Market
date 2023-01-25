import { Link } from 'react-router-dom'
import './Links.css'

function Links(props) {

	const{linkUrl, linkName}=props;

	return (
		
<div>
			<Link to={linkUrl} className="link">{linkName}</Link>

		</div>
	)
}

export default Links;