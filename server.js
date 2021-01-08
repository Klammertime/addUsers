/** @format */

const path = require('path')
const jsonServer = require('json-server')
const _ = require('lodash')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.post('/users', (req, res) => {
  const db = router.db // Assign the lowdb instance
  if (Array.isArray(req.body)) {
    req.body.forEach((element) => {
      insert(db, 'users', element)
    })
  } else {
    insert(db, 'users', req.body)
  }
  res.sendStatus(200)

  function insert(db, collection, data) {
    const table = db.get(collection)

    // Create a new doc if this ID does not exist
    if (_.isEmpty(table.find({ _id: data._id }).value())) {
      table.push(data).write()
    } else {
      // Update the existing data
      table
        .find({ _id: data._id })
        .assign(_.omit(data, ['_id']))
        .write()
    }
  }
})

server.use(router)
server.listen(3005, () => {
  console.log('JSON Server is running')
})
