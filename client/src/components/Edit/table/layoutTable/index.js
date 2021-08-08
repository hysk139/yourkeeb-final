import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from "react-icons/ai"
import { AiOutlineEdit } from "react-icons/ai"
import { Link } from 'react-router-dom';
import { editService } from '../../../../services/editService';
import { infoService } from '../../../../services/infoService';
import Swal from 'sweetalert2';
import './index.css'

const LayoutTable = () => {
  const [ layoutData, setLayoutData] = useState([]);
  let [ loading, setLoading ] = useState(false);

  useEffect(() => {
      let layout = true;
      const fetchData = async () => {
        const response = await infoService.getAllLayout();
        const data = response.data;
        if(layout) {
          setLayoutData(data);
        }
      }
      
      fetchData();
      setLoading(false);
  
      return() => {
        layout = false;
      }
    }, [layoutData])
    

  const handleDelete = (id) => {
    Swal.fire({
      title: `About to delete layout with id = ${id}. Are you sure?`,
      showDenyButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then( async (result) => {
      if (result.isConfirmed) {
        await editService.deleteLayoutById(id)
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
  else if(layoutData.length === 0) return ( <>Empty Table.</>)
  return (
    <>
      <h1 className="layout-table-header">
        Layout Table
      </h1>
      <div className = "table-style-layout courses">
        <table className="table-layout">
          <tr className = "table-head-layout">
            <th>ID</th>
            <th>Layout Name</th>
            <th>Keycount</th>
            <th>Details</th>
            <th className = "edit">Edit or Delete</th>
          </tr>

          {layoutData.map((data, idx) => {
            return(
              <tr className = "table-contents-layout" key={idx}>
                <td>{data.layout_id}</td>
                <td>{data.layout}</td>
                <td>{data.keycount}</td>
                <td>{data.details}...</td>
                <td>
                    <Link to={`/edit/layout/${data.layout_id}`}>
                        <button type="button" className="button-layout-table">
                              <AiOutlineEdit size={20}/>
                        </button>
                    </Link>
                    <button 
                      type="button" 
                      className="button-layout-table"
                      onClick={() => handleDelete(data.layout_id)}
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


export default LayoutTable;