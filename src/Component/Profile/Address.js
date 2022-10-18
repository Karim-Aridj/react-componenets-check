import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

function Address (props) {
    return (<div className="address" style={{color: "#fff"}}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <h2>Algiers, Algeria</h2>
            </div>)
}

export default Address;