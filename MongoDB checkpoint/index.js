// Switch to the 'contact' database
// use contact

// Create 'contactlist' collection and insert documents
db.contactlist.insertMany([
  { "lastName": "Ben", "firstName": "Moris", "email": "ben@gmail.com", "age": 26 },
  { "lastName": "Kefi", "firstName": "Seif", "email": "kefi@gmail.com", "age": 15 },
  { "lastName": "Emilie", "firstName": "brouge", "email": "emilie.b@gmail.com", "age": 40 },
  { "lastName": "Alex", "firstName": "brown", "age": 4 },
  { "lastName": "Denzel", "firstName": "Washington", "age": 3 }
])


db.contactlist.find()
db.contactlist.findOne({ _id: ObjectId("<objectId>") })
db.contactlist.find({ age: { $gt: 18 } })
db.contactlist.find({ age: { $gt: 18 }, lastName: /ah/ })

db.contactlist.updateOne(
  { lastName: "Kefi", firstName: "Seif" },
  { $set: { firstName: "Anis" } }
)
db.contactlist.deleteMany({ age: { $lt: 5 } })
db.contactlist.find()

