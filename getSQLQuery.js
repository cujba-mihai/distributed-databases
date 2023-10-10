const fs = require('fs').promises;

exports.getSQLQuery = async function (fileName, type = 'queries') {
  try {
    const query = await fs.readFile(`./oracle-sql/${type}/${fileName}.sql`, 'utf-8');
    return query;
  } catch (err) {
    console.error(`Failed to read SQL file: ${err}`);
    throw err;
  }
}
