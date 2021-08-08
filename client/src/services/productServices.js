import { gatewayHelper } from '../utility';

async function getAllKeyboard(){
  const body = {};
  const response = await gatewayHelper.http("GET", "products/keyboard/", body);
  return response;
}

async function getKbById(id){
  const body = {};
  const response = await gatewayHelper.http("GET", "products/keyboard/" + id, body);
  return response;
}

async function getKbDataById(id){
  const body = {};
  const response = await gatewayHelper.http("GET", "products/keyboard/data/" + id, body);
  return response;
}

async function insertKeyboard(data){
  const body = {};
  const response = await gatewayHelper.http("POST", "products/keyboard/add", body, data);
  return response;
}

async function getAllSwitch(){
  const body = {};
  const response = await gatewayHelper.http("GET", "products/switch/", body);
  return response;
}

async function getSwitchById(id){
  const body = {};
  const response = await gatewayHelper.http("GET", "products/switch/" + id, body);
  return response;
}

async function insertSwitch(data){
  const body = {};
  const response = await gatewayHelper.http("POST", "products/switch/add", body, data);
  return response;
}

export const productService = {
    getAllKeyboard,
    getKbById,
    insertKeyboard,
    getAllSwitch,
    getSwitchById,
    insertSwitch,
    getKbDataById
}                  