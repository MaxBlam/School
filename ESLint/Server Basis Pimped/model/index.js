const db = require('../db');

async function getCocktails() {
  const { rows } = await db.query('SELECT cname,preis FROM cocktail;');
  return {
    code: 200,
    data: rows,
  };
}

async function getIngredients(cname) {
  console.log(cname);
  const { rows } = await db.query(
    'SELECT zbez AS zutaten FROM cocktail JOIN besteht b on cocktail.cid = b.cid JOIN zutat z on b.zid = z.zid WHERE cname = $1',
    [cname],
  );
  return {
    code: 200,
    data: rows,
  };
}

async function patchAirport(id, data) {
  let props = [];
  for (const prop in data) props.push(`${prop} = '${data[prop]}'`);
  await db.query(`UPDATE airport SET ${props.join(',')} WHERE airport_name = $1`, [id]);

  return {
    code: 200,
    data: true,
  };
}

async function insertAirport(object) {
  await db.query(
    `INSERT INTO airport (airport_name, builddate, size)
                           VALUES($1,$2,$3)`,
    [object.airport_name, object.builddate, object.size],
  );
  return {
    code: 200,
    data: object.airport_name,
  };
}

module.exports = {
  getCocktails,
  getIngredients,
  patchAirport,
};
