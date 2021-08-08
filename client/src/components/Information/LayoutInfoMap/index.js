import { Link } from 'react-router-dom'
import './index.css'

const LayoutInfoMap = ({ data, type }) => {

  return (
    <>
      <div className="row-layout">
        {data.map((layout, idx) => {
          return(
              <div className="card2 column-layout">
                <div className="layout-name-fp">{layout.layout}</div>
                <div className="layout-keycount-fp">Keycount : {layout.keycount}</div>
                <div className="layout-details-fp">Details : <br></br>{layout.details}</div>
              </div>
          )
        })}
        </div>
     </>
  )
}

export default LayoutInfoMap;
