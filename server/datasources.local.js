// module.exports = {
//     "db": {
//       "name": "db",
//       "connector": "memory"
//     },
//     "MongoDB": {
//       "host": "",
//       "port": 0,
//       "url": "",
//       "database": "",
//       "password": "",
//       "name": "MongoDB",
//       "user": "",
//       "connector": "mongodb"
//     }
//   }

module.exports = {
  "MongoDB": {
    "name": "MongoDB",
    "connector": "mongodb",
    "url": process.env.MONGODB_URI
  }
}