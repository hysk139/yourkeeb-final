import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios';
//import { productService } from '../../../services/productServices'
import { editService } from '../../../../services/editService';
import { infoService } from '../../../../services/infoService';
import { useParams } from 'react-router'
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'
import './index.css'

const EditBrand = ({data, id}) => {

   const history = useHistory();
    
   const [ brand, setBrand ] = useState(data[0].brand);
   const [ country, setCountry ] = useState(data[0].country);
   const [ description, setDescription ] = useState(data[0].description);   
  
  
    const onSubmit = async () => {
      try {
        const res = await editService.editBrandById(id, {
          brand : brand,
          country: country,
          description: description
          
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
              <label htmlFor="fname" className="label-class">Name of the Brand:</label> <br />
              <input 
                type="text"  
                className="input-row font-for-inputs"
                onChange={(e) => setBrand(e.target.value)}
              />
              <br />
              <label htmlFor="lname" className="label-class">Brand Country:</label><br />
              <input 
                type="text" 
                className="input-row font-for-inputs" 
                onChange={(e) => setCountry(e.target.value)}
                />
              <br />
              <div className="row-form-diff-rating">
                <div className="column-form-diff-raiting">
                  <label htmlFor="rating" className="label-class">Brand Description:</label><br />
                  <input 
                    type="text" 
                    onChange={(e) => setDescription(e.target.value)}
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
  
  export default EditBrand;