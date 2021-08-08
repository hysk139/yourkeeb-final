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

const AddSwitch = () => {
    
   const history = useHistory();
    
    const [ switchName, setSwitchName ] = useState();
    const [ description, setDescription ] = useState();
    const [ price, setPrice ] = useState();   
  
    const onSubmit = async () => {
      try {
        const res = await productService.insertSwitch({
          sw_name : switchName,
          description: description,
          price: price
          
        }).then(
          Swal.fire('Data modified')
        ).then(
          history.push('/product')
        );;
      }
      catch(error){
        Swal.fire('Error.')
      }
    }

    const handleAdd = () => {
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
              <label htmlFor="fname" className="label-class">Name of the switch:</label> <br />
              <input 
                type="text" 
                id="dish_name" 
                className="input-row font-for-inputs"
                onChange={(e) => setSwitchName(e.target.value)}
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
              <div className="row-form-diff-rating">
              


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
                onClick={handleAdd}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default AddSwitch;