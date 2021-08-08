
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BrandInfoMap, LayoutInfoMap } from '../../components'
import { infoService } from '../../services/infoService'
import './index.css'
import { Helmet } from 'react-helmet'


const MoreInfo = ({type}) => {  
    const [ brandData, setBrandData ] = useState([]);
    const [ layoutData, setLayoutData ] = useState([]);
  
    useEffect(() => {
      let brand = true;
      let layout = true;
      const fetchBrand = async () => {
        const response = await infoService.getAllBrand();
        const data = response.data;
        if(brand) {
          setBrandData(data);
        }
      }
      
      const fetchLayout = async () => {
        const response = await infoService.getAllLayout();
        const data = response.data;
        if(layout) {
          setLayoutData(data);
        }
      }  
      fetchBrand();
      fetchLayout();
  
      return() => {
        brand= false;
        layout= false;
      }
    }, [brandData, layoutData])
    console.log(brandData);
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
              <li><Link to="/info/layout" className="moreinfo-opt">Layout</Link></li>
              <li><Link to="/info" className="product-type-list"> | </Link></li>
              <li><Link to="/info/brand" className="moreinfo-opt">Brand</Link></li>
            </ul>
          </div>
          <div className="column-right">
          {type === "brand" ? 
            <>
            <div>
              <h1 className="info-category-page">Brand</h1>
              <li><Link to= {`/add/${type}`}><button type="button" className="button-add">Add {type} </button></Link></li>
              <BrandInfoMap
                data={brandData}
                type={"brand"}
              />
            </div>
            </>
            :             <>
            <div>
              <h1 className="info-category-page">Layout</h1>
              <li><Link to= {`/add/${type}`}><button type="button" className="button-add">Add {type} </button></Link></li>
              <LayoutInfoMap 
                data={layoutData}
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

export default MoreInfo;
