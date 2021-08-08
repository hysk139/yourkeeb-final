import { gatewayHelper } from '../utility';

async function editKbById(id, data){
  const body = {};
  console.log(data);
  const response = await gatewayHelper.http("PUT", `edit/update/keyboard/${id}`, body, data);
  console.log(response);
  return response;
}

async function editSwitchById(id, data){
    const body = {};
    const response = await gatewayHelper.http("PUT", `edit/update/switch/${id}`, body, data);
    return response;
}

async function editLayoutById(id, data ){
    const body = {};
    const response = await gatewayHelper.http("PUT", "edit/update/layout/" + id, body, data);
    return response;
}

async function editBrandById(id, data){
    const body = {};
    const response = await gatewayHelper.http("PUT",`edit/update/brand/${id}`, body, data);
    return response;
}

async function deleteSwitchById(id){
    const body = {};
    const response = await gatewayHelper.http("DELETE",`edit/delete/switch/${id}`, body);
    return response;
}
async function deleteBrandById(id){
    const body = {};
    const response = await gatewayHelper.http("DELETE",`edit/delete/brand/${id}`, body);
    return response;
}

async function deleteKbById(id){
    const body = {};
    const response = await gatewayHelper.http("DELETE",`edit/delete/keyboard/${id}`, body);
    return response;
}

async function deleteLayoutById(id){
    const body = {};
    const response = await gatewayHelper.http("DELETE",`edit/delete/layout/${id}`, body);
    return response;
}


export const editService = {
    editBrandById,
    editKbById,
    editLayoutById,
    editSwitchById,
    deleteSwitchById,
    deleteBrandById,
    deleteKbById,
    deleteLayoutById
}   
