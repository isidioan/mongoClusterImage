rs.initiate(
   {
      _id: "mongoshardb",
      members: [
         { _id: 0, host : "mongoshardbn1:27017" },
         { _id: 1, host : "mongoshardbn2:27017" },
         { _id: 2, host : "mongoshardbn3:27017" }
      ]
   }
)
