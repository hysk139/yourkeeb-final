import { Link } from 'react-router-dom'
// import makaroni from '../../../assets/Recipes/makaroni.png'
import './index.css'

const SwitchMap = ({ data, type }) => {

  return (
    <>
      <div className="row-products">
        {data.map((switches, idx) => {
          return(
            <Link to={`${type.toLowerCase()}/${switches.sw_id}`} key={idx} >
              <div className="card column-products">
                <div className="switch-name-fp">{switches.sw_name}</div>
                <div className="rowbottomswitch">
                  <div className="switch-description-fp">{switches.description}</div>
                  <div className="switch-price-fp">{switches.price}</div>
                </div>
                
              </div>
            </Link>
          )
        })}
        </div>
     </>

  )
}
export default SwitchMap;
