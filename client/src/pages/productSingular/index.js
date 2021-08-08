import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router';
import { productService } from '../../services/productServices';
import { Helmet } from 'react-helmet';
import { AiOutlineLeft } from 'react-icons/ai'
import './index.css'

const ProductSingular = ({type}) => {
    const { id } = useParams();
    let [ data, setData ] = useState([]);
    let history = useHistory();
    let [ loading, setLoading ] = useState(false);
  
    useEffect(() => {
      let componentMounted = true;
      const fetchData = async () => {
        if(type === "keyboard"){
          const response = await productService.getKbById(id);
          const keyboardData = response.data;
          setData(keyboardData)
          setLoading(true);

        }
        else if(type === "switch"){
          const response = await productService.getSwitchById(id);
          const switchData = response.data;
          setData(switchData)
          setLoading(true);

        }
        else{
          setData("null")
        }
      }
      fetchData();
    }, [id, type])
  
    console.log(data)
    const handleClick = () => {
      history.push(`/product`)
    }
    if(loading === false){
        return null;
    }
    return (
      <>
        <div className="container-singular">
          <button 
            className="singular-back-button"
            type="button" 
            onClick={() => handleClick()}>
               <AiOutlineLeft /> Product
          </button>
  
          {type === "keyboard" ? 
          <>
        <Helmet>
              <meta charSet="utf-8" />
              <title>{`yourkeeb: ${type} - ${data[0].brand}`}</title>
         </Helmet>
            <div className="row-singular">
              <div className="column-singular">
              <h1 className="singular-product-name">
                  {data[0].name}
                </h1>   
                <h3 className="singular-details">
                  Description:
                </h3>
                <p className="singular-details">
                  {data[0].description}
                </p>
                <h3 className="singular-details">
                  Price : 
                </h3>
                <p className="singular-details">
                  {data[0].price}
                </p>
                <h3 className="singular-details">
                  Brand : 
                </h3>
                <p className="singular-details">
                  {data[0].brand}
                </p>
                <h3 className="singular-details">
                  Layout : 
                </h3>
                <p className="singular-details">
                  {data[0].layout}
                </p>
              </div>
            </div>
          </> 
          : 
          <>
          <Helmet>
                <meta charSet="utf-8" />
                <title>{`yourkeeb: ${type} - ${data[0].brand}`}</title>
           </Helmet>
              <div className="row-singular">
                <div className="column-singular">
                <h1 className="singular-product-name">
                    {data[0].sw_name}
                  </h1>   
                  <h3 className="singular-details">
                    Description:
                  </h3>
                  <p className="singular-details">
                    {data[0].description}
                  </p>
                  <h3 className="singular-details">
                    Price : 
                  </h3>
                  <p className="singular-details">
                    {data[0].price}
                  </p>
                </div>
              </div>
            </>}

          <div>
          </div>
        </div>
      </>
    )
  }
  
  export default ProductSingular;
  