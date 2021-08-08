import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from "react-icons/ai"
import { AiOutlineEdit } from "react-icons/ai"
import { Link } from 'react-router-dom';
import { editService } from '../../../../services/editService';
import { productService } from '../../../../services/productServices';
import Swal from 'sweetalert2';
import './index.css'

const SwitchTable = () => {
  const [ switchData, setSwitchData] = useState([]);
  let [ loading, setLoading ] = useState(false);

  useEffect(() => {
      let switches = true;
      const fetchData = async () => {
        const response = await productService.getAllSwitch();
        const data = response.data;
        if(switches) {
          setSwitchData(data);
        }
      }
      
      fetchData();
      setLoading(false);
  
      return() => {
        switches= false;
      }
    }, [switchData])
    

  const handleDelete = (id) => {
    Swal.fire({
      title: `About to delete switch with id = ${id}. Are you sure?`,
      showDenyButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then( async (result) => {
      if (result.isConfirmed) {
        await editService.deleteSwitchById(id)
        .then(
          Swal.fire(`Successfully deleted switch with id = ${id}.`)
        )
      } else if (result.isDenied) {
        Swal.fire('You canceled.', '', 'info')
      }
    })
  }
  
  console.log( switchData);
  if(loading === true){
    return null;
  } 
  else if(switchData.length === 0) return ( <>Empty Table.</>)
  return (
    <>
      <h1 className="switch-table-header">
        Switch Table
      </h1>
      <div className = "table-style-switch  courses">
        <table className="table-switch ">
          <tr className = "table-head-switch">
            <th>ID</th>
            <th>Switch Name</th>
            <th>Price</th>
            <th>Description</th>
            <th className = "edit">Edit or Delete</th>
          </tr>

          {switchData.map((data, idx) => {
            return(
              <tr className = "table-contents-switch" key={idx}>
                <td>{data.sw_id}</td>
                <td>{data.sw_name}</td>
                <td>{data.price}</td>
                <td>{data.description}...</td>
                <td>
                    <Link to={`/edit/switch/${data.sw_id}`}>
                        <button type="button" className="button-switch-table">
                              <AiOutlineEdit size={20}/>
                        </button>
                    </Link>
                    <button 
                      type="button" 
                      className="button-switch-table"
                      onClick={() => handleDelete(data.sw_id)}
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


export default SwitchTable;