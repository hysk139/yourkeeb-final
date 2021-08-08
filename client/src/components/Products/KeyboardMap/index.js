import { Link } from 'react-router-dom'
// import makaroni from '../../../assets/Recipes/makaroni.png'
import './index.css'

const KeyboardMap = ({ data, type }) => {

  return (
    <>
      <div className="row-products">
        {data.map((keyboard, idx) => {
          return(
            <Link to={`/product/${type.toLowerCase()}/${keyboard.kb_id}`} key={idx} >
              <div className="card column-products">
                <div className= "row1"> 
                  <div className ="row1left">
                    <span className="keyboard-name">{keyboard.name}</span>
                  </div>
                  <div className ="row1right">
                    <span className="keyboard-layout">{keyboard.layout}</span>
                  </div>
                  
                  
                </div>
                <div className="keyboard-brand">{keyboard.brand}</div>
                <div className="keyboard-price">{keyboard.price}</div>
              </div>
            </Link>
          )
        })}
        </div>
     </>

  )
}

export default KeyboardMap;
