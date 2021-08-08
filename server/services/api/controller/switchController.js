const dbQueries = require('../../config/dbQueries');
const { errorMessage, successMessage, status } = require('../helper/status');

const getAllSwitch = async (req, res) => {
    const query = 'SELECT * FROM switch ORDER BY sw_id;';

    try {
        const { rows } = await dbQueries(query);
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

const getSwitchByID = async (req, res) => {
  
  const id = parseInt(req.params.id);
  const query = 'SELECT * FROM switch WHERE sw_id = $1;';

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

const insertSwitch = async (req, res) => {
  const sw_name = (req.body.sw_name);
  const description = (req.body.description);
  const price = (req.body.price);
    
  const query = 'INSERT INTO switch VALUES(DEFAULT, $1, $2, $3);';

    try {
        const { rows } = await dbQueries(query, [sw_name, description, price]);
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
    getAllSwitch,
    insertSwitch,
    getSwitchByID
  }