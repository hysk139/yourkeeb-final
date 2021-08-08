import { Link } from 'react-router-dom'
import './index.css'

const BrandInfoMap = ({ data, type }) => {

  return (
    <>
      <div className="row-brand">
        {data.map((brand, idx) => {
          return(
              <div className="card1 column-brand">
                <div className="brand-name-fp">{brand.brand}</div>
                <div className="brand-country-fp">Based in : {brand.country}</div>
                <div className="brand-description-fp">Description : <br></br>{brand.description}</div>
              </div>
          )
        })}
        </div>
     </>

  )
}

export default BrandInfoMap;
