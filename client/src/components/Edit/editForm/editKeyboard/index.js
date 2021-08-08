import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios';
//import { productService } from '../../../services/productServices'
import { editService } from '../../../../services/editService'
import { infoService } from '../../../../services/infoService';
import { useParams } from 'react-router'
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'
import './index.css'

const EditKeyboard = ({data, id}) => {
    
   const history = useHistory();
  
    
    const [ brandData, setBrandData ] = useState([]);
    const [ layoutData, setLayoutData ] = useState([]);
    const [ keyboardName, setKeyboardName ] = useState(data[0].name);
    const [ description, setDescription ] = useState(data[0].description);
    const [ price, setPrice ] = useState(data[0].price);
    const [ brandId, setBrandId ] = useState(data[0].brand_id);
    const [ layoutId, setLayoutId ] = useState(data[0].layout_id);
  
  
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

  
    const onSubmit = async () => {
      try {
        const res = await editService.editKbById(id, {
          name : keyboardName,
          brand_id: brandId,
          layout_id: layoutId,
          description: description,
          price: price
          
        }).then(
          Swal.fire('Data modified')
        ).then(
          history.push('/edit')
        );
      }
      catch(error){
        Swal.fire('Error.')
      }
    }
    const handleEdit = () => {
      onSubmit();
    }
    const handleCancel = () => {
      history.push('/edit')
    }
    return (
      <div className="border-form">
        <form>
          <div className="row-form">
            <div className="column-form">
              <label htmlFor="fname" className="label-class">Name of the keyboard:</label> <br />
              <input 
                type="text" 
                className="input-row font-for-inputs"
                onChange={(e) => setKeyboardName(e.target.value)}
              />
              <br />
              <label htmlFor="lname" className="label-class">Description:</label><br />
              <input 
                type="text"  
                className="input-row font-for-inputs" 
                onChange={(e) => setDescription(e.target.value)}
                />
              <br />
              <label htmlFor="lname" className="label-class">Brand:</label><br />
              <div className="row-form-diff-rating">
                <div className="column-form-diff-raiting">
                  <select name="brand" id="brand" 
                    className="input-row-diff font-for-inputs" 
                    defaultValue="1"
                    onChange={(e) => setBrandId(e.target.value)}
                    required
                  > 
                  <option value="1"></option>

                  {brandData.map((brand) => {
                    //
                    return(
                      <option value={brand.brand_id}>{brand.brand}</option>
                    )
                      
                  })}
                  </select>
                </div>

                <label htmlFor="lname" className="label-class">Layout:</label><br />
                <div className="column-form-diff-raiting">
                  <select name="layout" id="layout" 
                    className="input-row-diff font-for-inputs" 
                    defaultValue="1"
                    onChange={(e) => setLayoutId(parseInt(e.target.value))}
                    required
                  > 
                  <option value="1"></option>

                  {layoutData.map((layout) => {
                    return(
                      <option value={layout.layout_id}>{layout.layout}</option>
                    )
                      
                  })}
                  </select>
                </div>


                <div className="column-form-diff-raiting">
                  <label htmlFor="rating" className="label-class">Price:</label><br />
                  <input 
                    type="number" 
                    onChange={(e) => setPrice(e.target.value)}
                    className="input-row-rating font-for-inputs"/>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div>
          <div className="row-form">
            <div className="column-form">
              <br/>
              <input type="button" 
              value="cancel" 
              className="input-row font-for-cancel-submit" 
              onClick={() => handleCancel()}/>
            </div>
            <div className="column-form">
              <br/>
              <input 
                type="submit" 
                value="submit" 
                className="input-row font-for-cancel-submit" 
                onClick={handleEdit}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default EditKeyboard;