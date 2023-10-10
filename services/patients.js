const {  getSQLQuery } = require('../getSQLQuery')
const { getDatabaseConnection } = require('../db');

exports.getPatients = async (req, res) => {
  try {
    const { patientsDb } = await getDatabaseConnection();
    
    // Assuming you have a query builder or ORM
    const getAllPatientsQuery = await getSQLQuery('SelectAllPatients');

    try {
      const dbLink = await getSQLQuery('Link', 'links/patients')

      await patientsDb.query(dbLink);
    } catch (err) {
      console.error(err)
    }
    
    const result = await patientsDb.query(getAllPatientsQuery);

    res.json({
      success: true,
      data: result,
    });


  } catch (err) {
    console.error('Failed to retrieve patients:', err);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
}