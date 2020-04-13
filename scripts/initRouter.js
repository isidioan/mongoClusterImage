// mongo-shard-a
sh.addShard( "mongosharda/mongoshardan1:27017")
sh.addShard( "mongosharda/mongoshardan2:27017")
sh.addShard( "mongosharda/mongoshardan3:27017")

// mongo-shard-b
sh.addShard( "mongoshardb/mongoshardbn1:27017")
sh.addShard( "mongoshardb/mongoshardbn2:27017")
sh.addShard( "mongoshardb/mongoshardbn3:27017")



admin = db.getSiblingDB("admin")
admin.createUser(
  {
    user: "",
    pwd: "",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)