import { gatewayHelper } from '../utility';


async function getAllBrand(){
    const body = {};
    const response = await gatewayHelper.http("GET", "brand", body);
    return response;
  }

  async function getBrandById(id){
    const body = {};
    const response = await gatewayHelper.http("GET", "brand/"+ id, body);
    return response;
  }

async function getAllLayout(){
    const body = {};
    const response = await gatewayHelper.http("GET", "layout", body);
    return response;
  }

async function getLayoutById(id){
    const body = {};
    const response = await gatewayHelper.http("GET", "layout/"+ id, body);
    return response;
  }

async function insertLayout(data){
    const body = {};
    const response = await gatewayHelper.http("POST", "layout/add", body, data);
    return response;
  }

  async function insertBrand(data){
    const body = {};
    const response = await gatewayHelper.http("POST", "brand/add", body, data);
    return response;
  }

  export const infoService = {
    getAllBrand,
    getAllLayout,
    getBrandById,
    getLayoutById,
    insertLayout, 
    insertBrand
}                  