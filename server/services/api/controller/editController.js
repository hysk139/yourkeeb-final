const dbQueries = require('../../config/dbQueries');
const { errorMessage, successMessage, status } = require('../helper/status');

const updateKbById = async (req, res) => {
    const name = (req.body.name);
    const brand_id = (req.body.brand_id);
    const layout_id = (req.body.layout_id);
    const description = (req.body.description);
    const price = (req.body.price);
    const id = parseInt(req.params.id);
    console.log(req.params)
    console.log(req.body)
    const query = 'UPDATE keyboards SET name = $1, brand_id = $2, layout_id = $3, description = $4, price = $5 WHERE kb_id = $6 returning *;'
    try {
      const { rows } = await dbQueries(query, [name, brand_id, layout_id, description,  price, id]);
      const dbResponse = rows;
      if (dbResponse[0] === undefined) {
        errorMessage.error = 'There are no appetizer';
        return res
          .status(status.error)
          .send(errorMessage.error + ' ' + error.code);
      }
      successMessage.data = dbResponse;
      return res  
        .status(status.success)
        .send(successMessage.data);
    } catch (error) {
      errorMessage.error = 'An error occured.'
      return res
        .status(status.error)
        .send(errorMessage.error + ' ' + error.code);
    }
  }

  const deleteKbById = async (req, res) => {
    const id = parseInt(req.params.id);
    console.log(req.params)
    console.log(req.body)
    const query = 'DELETE FROM keyboards WHERE kb_id = $1;'
    try {
      const { rows } = await dbQueries(query, [id]);
      const dbResponse = rows;
      if (dbResponse[0] === undefined) {
        errorMessage.error = 'There are no appetizer';
        return res
          .status(status.error)
          .send(errorMessage.error + ' ' + error.code);
      }
      successMessage.data = dbResponse;
      return res  
        .status(status.success)
        .send(successMessage.data);
    } catch (error) {
      errorMessage.error = 'An error occured.'
      return res
        .status(status.error)
        .send(errorMessage.error + ' ' + error.code);
    }
  }


  const updateSwitchById = async (req, res) => {
    const sw_name = (req.body.sw_name);
    const description = (req.body.description);
    const price = (req.body.price);
    const id = parseInt(req.params.id);
    console.log(req.params)
    console.log(req.body)
    const query = 'UPDATE switch SET sw_name = $1, description = $2, price = $3 WHERE sw_id = $4 returning *;'
    try {
    const { rows } = await dbQueries(query, [sw_name, description, price, id]);
      const dbResponse = rows;
      if (dbResponse[0] === undefined) {
        errorMessage.error = 'There are no switch';
        return res
          .status(status.error)
          .send(errorMessage.error + ' ' + error.code);
      }
      successMessage.data = dbResponse;
      return res  
        .status(status.success)
        .send(successMessage.data);
    } catch (error) {
      errorMessage.error = 'An error occured.'
      return res
        .status(status.error)
        .send(errorMessage.error + ' ' + error.code);
    }
  }

  const deleteSwitchById = async (req, res) => {
    const id = parseInt(req.params.id);
    console.log(req.params)
    console.log(req.body)
    const query = 'DELETE FROM switch WHERE sw_id = $1;'
    try {
      const { rows } = await dbQueries(query, [id]);
      const dbResponse = rows;
      if (dbResponse[0] === undefined) {
        errorMessage.error = 'There are no switch';
        return res
          .status(status.error)
          .send(errorMessage.error + ' ' + error.code);
      }
      successMessage.data = dbResponse;
      return res  
        .status(status.success)
        .send(successMessage.data);
    } catch (error) {
      errorMessage.error = 'An error occured.'
      return res
        .status(status.error)
        .send(errorMessage.error + ' ' + error.code);
    }
  }

  const updateLayoutById = async (req, res) => {
    const layout = (req.body.layout);
    const keycount = (req.body.keycount);
    const details = (req.body.details);
    const id = parseInt(req.params.id);
    console.log(req.params)
    console.log(req.body)
    const query = 'UPDATE layouts SET layout = $1, keycount = $2, details = $3 WHERE layout_id = $4 returning *;'
    try {
      const { rows } = await dbQueries(query, [layout, keycount, details, id]);
      const dbResponse = rows;
      if (dbResponse[0] === undefined) {
        errorMessage.error = 'There are no appetizer';
        return res
          .status(status.error)
          .send(errorMessage.error + ' ' + error.code);
      }
      successMessage.data = dbResponse;
      return res  
        .status(status.success)
        .send(successMessage.data);
    } catch (error) {
      errorMessage.error = 'An error occured.'
      return res
        .status(status.error)
        .send(errorMessage.error + ' ' + error.code);
    }
  }

  const deleteLayoutById = async (req, res) => {
    const id = parseInt(req.params.id);
    console.log(req.params)
    console.log(req.body)
    const query = 'DELETE FROM layouts WHERE layout_id = $1;'
    try {
      const { rows } = await dbQueries(query, [id]);
      const dbResponse = rows;
      if (dbResponse[0] === undefined) {
        errorMessage.error = 'There are no appetizer';
        return res
          .status(status.error)
          .send(errorMessage.error + ' ' + error.code);
      }
      successMessage.data = dbResponse;
      return res  
        .status(status.success)
        .send(successMessage.data);
    } catch (error) {
      errorMessage.error = 'An error occured.'
      return res
        .status(status.error)
        .send(errorMessage.error + ' ' + error.code);
    }
  }

  const updateBrandById = async (req, res) => {
    const brand = (req.body.brand);
    const country = (req.body.country);
    const description = (req.body.description);
    const id = parseInt(req.params.id);
    console.log(req.params)
    console.log(req.body)
    const query = 'UPDATE brand SET brand = $1, country = $2, description = $3 WHERE brand_id = $4 returning *;'
    try {
      const { rows } = await dbQueries(query, [brand, country, description, id]);
      const dbResponse = rows;
      if (dbResponse[0] === undefined) {
        errorMessage.error = 'There are no brand';
        return res
          .status(status.error)
          .send(errorMessage.error + ' ' + error.code);
      }
      successMessage.data = dbResponse;
      return res  
        .status(status.success)
        .send(successMessage.data);
    } catch (error) {
      errorMessage.error = 'An error occured.'
      return res
        .status(status.error)
        .send(errorMessage.error + ' ' + error.code);
    }
  }


  const deleteBrandById = async (req, res) => {
    const id = parseInt(req.params.id);
    console.log(req.params)
    console.log(req.body)
    const query = 'DELETE FROM brand WHERE brand_id = $1;'
    try {
      const { rows } = await dbQueries(query, [id]);
      const dbResponse = rows;
      if (dbResponse[0] === undefined) {
        errorMessage.error = 'There are no appetizer';
        return res
          .status(status.error)
          .send(errorMessage.error + ' ' + error.code);
      }
      successMessage.data = dbResponse;
      return res  
        .status(status.success)
        .send(successMessage.data);
    } catch (error) {
      errorMessage.error = 'An error occured.'
      return res
        .status(status.error)
        .send(errorMessage.error + ' ' + error.code);
    }
  }

  
  

  module.exports = {
    updateKbById,
    deleteKbById,
    updateBrandById,
    deleteBrandById,
    updateLayoutById,
    deleteLayoutById,
    updateSwitchById,
    deleteSwitchById,
  }