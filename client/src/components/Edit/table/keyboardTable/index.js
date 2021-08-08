import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from "react-icons/ai"
import { AiOutlineEdit } from "react-icons/ai"
import { Link } from 'react-router-dom';
import { editService } from '../../../../services/editService';
import { productService } from '../../../../services/productServices';
import Swal from 'sweetalert2';
import './index.css'

const KeyboardTable = () => {
  const [ keyboardData, setKeyboardData] = useState([]);
  let [ loading, setLoading ] = useState(false);

  useEffect(() => {
      let switches = true;
      const fetchData = async () => {
        const response = await productService.getAllKeyboard();
        const data = response.data;
        if(switches) {
          setKeyboardData(data);
        }
      }
      
      fetchData();
      setLoading(false);
      
  
      return() => {
        switches= false;
      }
    }, [keyboardData])
    
    console.log(keyboardData);
  const handleDelete = (id) => {
    Swal.fire({
      title: `About to delete keyboard with id = ${id}. Are you sure?`,
      showDenyButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then( async (result) => {
      if (result.isConfirmed) {
        await editService.deleteKbById(id)
        .then(
          Swal.fire(`Successfully deleted keyboard with id = ${id}.`)
        )
      } else if (result.isDenied) {
        Swal.fire('You canceled.', '', 'info')
      }
    })
  }
  
  if(loading === true){
    return null;
  } 
  else if(keyboardData.length === 0) return ( <>Empty Table.</>)
  return (
    <>
      <h1 className="keyboard-table-header">
        Keyboard Table
      </h1>
      <div className = "table-style-keyboard courses-keyboard">
        <table className="table-keyboard">
          <tr className = "table-head-keyboard">
            <th>ID</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Layout</th>
            <th>Price</th>
            <th>Description</th>
            <th className = "edit">Edit or Delete</th>
          </tr>

          {keyboardData.map((data, idx) => {
            return(
              <tr className = "table-contents-keyboard" key={idx}>
                <td>{data.kb_id}</td>
                <td>{data.name}</td>
                <td>{data.brand}</td>
                <td>{data.layout}</td>
                <td>{data.price}</td>
                <td>{data.description}</td>
                <td>
                    <Link to={`/edit/keyboard/${data.kb_id}`}>
                        <button type="button" className="button-keyboard-table">
                              <AiOutlineEdit size={20}/>
                        </button>
                    </Link>
                    <button 
                      type="button" 
                      className="button-keyboard-table"
                      onClick={() => handleDelete(data.kb_id)}
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


export default KeyboardTable;