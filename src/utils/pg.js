const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  port: 3000,
  password: '818206091520',
  user: 'postgres',
  database: 'imtihon'
})

const pg = async(SQL, ...values) => {
  const client = await pool.connect()
  try {
    const {rows} = await client.query(SQL, values.length ? values : null)
    return rows
  } catch (error) {
    console.log(error)
  } finally{
    client.release()
  }
}

module.exports = {pool, pg}