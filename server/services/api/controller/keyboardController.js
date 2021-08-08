const dbQueries = require('../../config/dbQueries');
const { errorMessage, successMessage, status } = require('../helper/status');

const getAllKeyboard = async (req, res) => {
    const query = 'SELECT keyboards.kb_id, keyboards.name, brand.brand, layouts.layout, keyboards.description, keyboards.price FROM keyboards LEFT OUTER JOIN brand ON keyboards.brand_id = brand.brand_id LEFT OUTER JOIN layouts ON keyboards.layout_id = layouts.layout_id ORDER BY kb_id;';

    try {
        const { rows } = await dbQueries(query);
        const dbResponse = rows;
        if (dbResponse[0] === undefined) {
          errorMessage.error = 'There are no keyboards';
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

const getKeyboardDataByID = async (req, res) => {
  
  const id = parseInt(req.params.id);
  const query = 'SELECT * FROM keyboards WHERE keyboards.kb_id = $1;';

  try {
      const { rows } = await dbQueries(query, [id]);
      const dbResponse = rows;
      if (dbResponse[0] === undefined) {
        errorMessage.error = 'There are no keyboards';
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

const getKeyboardByID = async (req, res) => {
  
  const id = parseInt(req.params.id);
  const query = 'SELECT keyboards.kb_id, keyboards.name, brand.brand , layouts.layout, keyboards.description, keyboards.price FROM keyboards LEFT OUTER JOIN brand ON keyboards.brand_id = brand.brand_id LEFT OUTER JOIN layouts ON keyboards.layout_id = layouts.layout_id WHERE keyboards.kb_id = $1 ORDER BY kb_id;';

  try {
      const { rows } = await dbQueries(query, [id]);
      const dbResponse = rows;
      if (dbResponse[0] === undefined) {
        errorMessage.error = 'There are no keyboards';
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

const insertKeyboard = async (req, res) => {

  const name = (req.body.name);
  const brand_id = (req.body.brand_id);
  const layout_id = (req.body.layout_id);
  const description = (req.body.description);
  const price = (req.body.price);
  const id = parseInt(req.params.id);
  const query = 'INSERT INTO keyboards VALUES (DEFAULT, $1, $2 , $3 , $4, $5);';

    try {
        const { rows } = await dbQueries(query, [name, brand_id, layout_id, description,  price]);
        const dbResponse = rows;
        if (!dbResponse) {
            errorMessage.error = `Cannot add to ${req.body.table_name}` ;
            return res
              .status(status.error)
              .send(errorMessage + ' ' + error.code);
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
    getAllKeyboard,
    insertKeyboard,
    getKeyboardByID,
    getKeyboardDataByID
  }