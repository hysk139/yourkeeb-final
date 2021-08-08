import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { productService } from '../../services/productServices';
import { infoService } from '../../services/infoService';
import { useParams } from 'react-router'
import { EditKeyboard, AddKeyboard, EditSwitch, AddSwitch, AddLayout, AddBrand, EditBrand, EditLayout } from '../../components';

const AdminAddOrEdit = ({addOrEdit, type}) => {
    let [ loading, setLoading ] = useState(true);
    let [ data, setData ] = useState([]);
    const { id } = useParams();
  
    useEffect(() => {
      let keyboard = true;
      let switches = true;
      let brand = true;
      let layout = true;

      if(!addOrEdit){
      const fetchData = async () => {
        if(type === "keyboard"){
          const response = await productService.getKbDataById(id);
          const keyboardData = response.data;
          console.log("aahahah");
          if(keyboard){
            setData(keyboardData)
            setLoading(false)
          }
        }
        else if(type === "switch"){
          const response = await productService.getSwitchById(id);
          const switchData = response.data;
          if(switches){
            setData(switchData)
            setLoading(false)
          }
        }
        else if(type === "layout"){
          const response = await infoService.getLayoutById(id);
          const layoutData = response.data;
          if(layout){
            setData(layoutData)
            setLoading(false)
          }
        }

        else if(type === "brand"){
            const response = await infoService.getBrandById(id);
            const brandData = response.data;
            if(brand){
              setData(brandData)
              setLoading(false)
            }
          }
        else{
          setData("null")
        }
      }
      fetchData();
    }
      return() => {
        keyboard = true;
        switches = true;
        brand = true;
        layout = true ;
      }
      
    }, [id, type, addOrEdit])
    return (
      <>      
      <Helmet>
          <meta charSet="utf-8" />
          <title>yourkeeb: {addOrEdit ? `Add` : `Edit`} Page</title>
        </Helmet>
        <div className="admin-header">
        </div>
        {addOrEdit ?     
           type === "keyboard" ? 
           <AddKeyboard/>
           : 
           (type === "switch" ? 
           (<AddSwitch/>)
           : 
           (type === "layout" ?
           (<AddLayout/>)
           :
           (type === "brand" ? 
           (<AddBrand/>)
           :
           (null) )))
          :
          <>
            {loading ? 
            <>
              Loading data...   
            </> 
            : 
              type === "keyboard" ? 
              <EditKeyboard data={data} id={id}/> 
              : 
              (type === "switch" ? 
              (<EditSwitch data={data} id={id}/>)
              : 
              (type === "layout" ?
              (<EditLayout data={data} id={id}/>)
              :
              (type === "brand" ? 
              (<EditBrand data={data} id={id}/>)
              :
              (null) )))
        
            
            }
          </>
        }
      </> 
    )
  }
  
  export default AdminAddOrEdit;
  