const dbQueries = require('../../config/dbQueries');
const { errorMessage, successMessage, status } = require('../helper/status');

const getAllLayout = async (req, res) => {
    const query = 'SELECT * FROM layouts ORDER BY layout_id;';

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

const getLayoutById = async (req, res) => {
  const id = parseInt(req.params.id);
  const query = 'SELECT * FROM layouts WHERE layouts.layout_id = $1;';

  try {
      const { rows } = await dbQueries(query, [id]);
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


const insertLayout = async (req, res) => {
  const layout = (req.body.layout);
  const keycount = (req.body.keycount);
  const details = (req.body.details);
  const query = 'INSERT INTO layouts VALUES (DEFAULT, $1, $2, $3);';

    try {
        const { rows } = await dbQueries(query, [layout, keycount, details]);
        const dbResponse = rows;
        if (!dbResponse) {
            errorMessage.error = `Cannot add` ;
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
    getAllLayout,
    insertLayout,
    getLayoutById
  }