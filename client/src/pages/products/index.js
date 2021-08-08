import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { KeyboardMap, SwitchMap } from '../../components'
import { productService } from '../../services/productServices'
import './index.css'
import { Helmet } from 'react-helmet'


const ProductCatalogue = ({type}) => {  
    const [ keyboardData, setKeyboardData ] = useState([]);
    const [ switchData, setSwitchData ] = useState([]);
  
    useEffect(() => {
      let keyboard = true;
      let switches = true;
      const fetchKeyboard = async () => {
        const response = await productService.getAllKeyboard();
        const data = response.data;
        if(keyboard) {
          setKeyboardData(data);
        }
      }
      
      const fetchSwitch = async () => {
        const response = await productService.getAllSwitch();
        const data = response.data;
        if(switches) {
          setSwitchData(data);
        }
      }  
      fetchKeyboard();
      fetchSwitch();
  
      return() => {
        keyboard= false;
        switches= false;
      }
    }, [keyboardData, switchData])
    console.log(keyboardData, switchData)
    return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>yourkeeb: products</title>
    </Helmet>
    <div className="box-sizing">
        <div className="row">
          <div className="column">
            <ul className="list-destroy-borderstyle">
              <li><Link to="/product" className="product-type-list">Keyboards</Link></li>
              <li><Link to="/product" className="product-type-list"> | </Link></li>
              <li><Link to="/product/switch" className="product-type-list">Switches</Link></li>
            </ul>
          </div>
          <div className="column-bottom">
          {type === "keyboard" ? 
            <>
            <div>
              <h1 className="product-category-page">Keyboard</h1>
              <li><Link to= {`/add/${type}`}><button type="button" className="button-add">Add {type} </button></Link></li>
              <KeyboardMap 
                data={keyboardData}
                type={"keyboard"}
              />
            </div>
            </>
            :             <>
            <div>
              <h1 className="product-category-page">Switch</h1>
              <li><Link to= {`/add/${type}`}><button type="button" className="button-add">Add {type} </button></Link></li>
              <SwitchMap 
                data={switchData}
                type={"switch"}
              />
            </div>
            </>}

            </div>
        </div>
    </div>
    </>

    )
}

export default ProductCatalogue;
