import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from "react-icons/ai"
import { AiOutlineEdit } from "react-icons/ai"
import { Link } from 'react-router-dom';
import { editService } from '../../../../services/editService';
import { infoService } from '../../../../services/infoService';
import Swal from 'sweetalert2';
import './index.css'

const BrandTable = () => {
  const [ brandData, setBrandData] = useState([]);
  let [ loading, setLoading ] = useState(false);

  useEffect(() => {
      let brand = true;
      const fetchData = async () => {
        const response = await infoService.getAllBrand();
        const data = response.data;
        if(brand) {
          setBrandData(data);
        }
      }
      
      fetchData();
      setLoading(false);
  
      return() => {
        brand = false;
      }
    }, [brandData])
    

  const handleDelete = (id) => {
    Swal.fire({
      title: `About to delete layout with id = ${id}. Are you sure?`,
      showDenyButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then( async (result) => {
      if (result.isConfirmed) {
        await editService.deleteBrandById(id)
        .then(
          Swal.fire(`Successfully deleted layout with id = ${id}.`)
        )
      } else if (result.isDenied) {
        Swal.fire('You canceled.', '', 'info')
      }
    })
  }
  
  if(loading === true){
    return null;
  } 
  else if(brandData.length === 0) return ( <>Empty Table.</>)
  return (
    <>
      <h1 className="brand-table-header">
        Brand Table
      </h1>
      <div className = "table-style-brand courses-brand">
        <table className="table-brand">
          <tr className = "table-head-brand">
            <th>ID</th>
            <th>Brand Name</th>
            <th>Country</th>
            <th>Description</th>
            <th className = "edit-brand">Edit or Delete</th>
          </tr>

          {brandData.map((data, idx) => {
            return(
              <tr className = "table-contents-brand" key={idx}>
                <td>{data.brand_id}</td>
                <td>{data.brand}</td>
                <td>{data.country}</td>
                <td>{data.description}</td>
                <td>
                    <Link to={`/edit/brand/${data.brand_id}`}>
                        <button type="button" className="button-brand-table">
                              <AiOutlineEdit size={20}/>
                        </button>
                    </Link>
                    <button 
                      type="button" 
                      className="button-brand-table"
                      onClick={() => handleDelete(data.brand_id)}
                      >
                          <AiOutlineDelete size={20}/>
                    </button>
                </td>
              </tr>
            )
          })}
        </table>
      </div>
    </>
  )
}


export default BrandTable;