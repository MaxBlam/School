const db = require('../db');

async function getCocktails() {
  const { rows } = await db.query('SELECT cname,preis FROM cocktail;');
  return {
    code: 200,
    data: rows,
  };
}

async function getIngredients(cname) {
  const { rows } = await db.query(
    'SELECT zbez AS zutaten FROM cocktail JOIN besteht b on cocktail.cid = b.cid JOIN zutat z on b.zid = z.zid WHERE cname = $1',
    [cname],
  );
  return {
    code: 200,
    data: rows,
  };
}

async function getBelowPrice(price) {
  const { rows } = await db.query('SELECT cname,preis FROM cocktail WHERE preis <= $1', [price]);
  return {
    code: 200,
    data: rows,
  };
}

async function deleteByName(cname) {
  let cid;
  try {
    cid = await (await db.query('SELECT cid FROM cocktail WHERE cname = $1', [cname])).rows[0].cid;
  } catch (err) {
    throw new Error(`Cocktail ${cname} not found!`);
  }
  const tables = ['besteht', 'bestellt', 'cocktail'];
  for (t of tables) {
    await db.query(`DELETE FROM ${t} WHERE cid = ${cid}`);
  }
  return {
    code: 200,
    data: 'Deleted',
  };
}


async function insertCocktail(object) {
  await db.query(
    'INSERT INTO cocktail (cid, cname, preis,zubereitung,kid,zgid,sgid) VALUES(DEFAULT,$1,$2,$3,$4,$5,$6)',
    [object.cname, object.preis, object.zubereitung,object.kid, object.zgid,object.sgid],
  );
  return {
    code: 200,
    data: `Inserted ${object.cid}`,
  };
}

module.exports = {
  getCocktails,
  getIngredients,
  getBelowPrice,
  deleteByName,
  insertCocktail,
};
