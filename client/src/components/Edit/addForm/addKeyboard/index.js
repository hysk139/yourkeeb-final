import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios';
//import { productService } from '../../../services/productServices'
import { productService } from '../../../../services/productServices';
import { infoService } from '../../../../services/infoService';
import { useParams } from 'react-router'
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'
import './index.css'

const AddKeyboard = () => {
    
   const history = useHistory();
  
    
    const [ brandData, setBrandData ] = useState([]);
    const [ layoutData, setLayoutData ] = useState([]);
    const [ keyboardName, setKeyboardName ] = useState();
    const [ description, setDescription ] = useState();
    const [ price, setPrice ] = useState();
    const [ brandId, setBrandId ] = useState();
    const [ layoutId, setLayoutId ] = useState();
  
  
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

      // console.log(id);

    

  
    
  
    const onSubmit = async () => {
      try {
        const res = await productService.insertKeyboard({
          name : keyboardName,
          brand_id: brandId,
          layout_id: layoutId,
          description: description,
          price: price
          
        }).then(
          Swal.fire('Data modified')
        ).then(
          history.push('/product')
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
      history.push('/product')
    }
    return (
      <div className="border-form">
        <form>
          <div className="row-form">
            <div className="column-form">
              <label htmlFor="fname" className="label-class">Name of the keyboard:</label> <br />
              <input 
                type="text" 
                id="dish_name" 
                className="input-row font-for-inputs"
                onChange={(e) => setKeyboardName(e.target.value)}
              />
              <br />
              <label htmlFor="lname" className="label-class">Description:</label><br />
              <input 
                type="text" 
                id="description" 
                className="input-row font-for-inputs" 
                onChange={(e) => setDescription(e.target.value)}
                />
              <br />
              <label htmlFor="lname" className="label-class">Brand:</label><br />
              <div className="row-form-diff-rating">
                <div className="column-form-diff-raiting">
                  <select name="difficulty" id="difficulty" 
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
                  <select name="difficulty" id="difficulty" 
                    className="input-row-diff font-for-inputs" 
                    defaultValue="1"
                    onChange={(e) => setLayoutId(parseInt(e.target.value))}
                    required
                  > 
                  <option value="1"></option>

                  {layoutData.map((layout) => {
                    //
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
                    id="rating" 
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
  
  export default AddKeyboard;