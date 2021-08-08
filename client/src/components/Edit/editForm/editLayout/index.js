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

const EditLayout = ({data, id}) => {

  const history = useHistory();
    
  const [ layout, setLayout ] = useState(data[0].layout);
  const [ keycount, setKeycount ] = useState(data[0].keycount);
  const [ details, setDetails ] = useState(data[0].details);   

  
  
    const onSubmit = async () => {
      try {
        const res = await editService.editLayoutById(id, {
          layout : layout,
          keycount: keycount,
          details: details
          
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
              <label htmlFor="fname" className="label-class">Name of the Layout:</label> <br />
              <input 
                type="text" 
                className="input-row font-for-inputs"
                onChange={(e) => setLayout(e.target.value)}
              />
              <br />
              <label htmlFor="lname" className="label-class">Layout Keycount:</label><br />
              <input 
                type="number" 
                className="input-row font-for-inputs" 
                onChange={(e) => setKeycount(e.target.value)}
                />
              <br />
              <div className="row-form-diff-rating">
                <div className="column-form-diff-raiting">
                  <label htmlFor="rating" className="label-class">Layout Details:</label><br />
                  <input 
                    type="text" 
                    onChange={(e) => setDetails(e.target.value)}
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
  
  export default EditLayout;