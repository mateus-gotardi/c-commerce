let user = process.env.DB_USER
let password = process.env.DB_PASS
let host = process.env.DB_HOST
let database = process.env.DB_NAME

module.exports={
  dialect: "postgres",
  host: host,
  username: user,
  password: password,
  database: database,
  define: {
      timestamps: true,
  }
}