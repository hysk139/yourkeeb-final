const dbQueries = require('../../config/dbQueries');
const { errorMessage, successMessage, status } = require('../helper/status');

const getAllBrand = async (req, res) => {
    const query = 'SELECT * FROM brand ORDER BY brand_id;';

    try {
        const { rows } = await dbQueries(query);
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

const getBrandById = async (req, res) => {
  const id = parseInt(req.params.id);
  const query = 'SELECT * FROM brand WHERE brand.brand_id = $1;';

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



const insertBrand = async (req, res) => {
  const brand = (req.body.brand);
  const country = (req.body.country);
  const description = (req.body.description);
  const query = 'INSERT INTO brand VALUES(DEFAULT, $1, $2, $3);';

    try {
        const { rows } = await dbQueries(query, [brand, country, description]);
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
    getAllBrand,
    insertBrand,
    getBrandById
  }