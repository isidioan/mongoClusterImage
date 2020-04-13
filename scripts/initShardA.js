rs.initiate(
   {
      _id: "mongosharda",
      members: [
         { _id: 0, host : "mongoshardan1:27017" },
         { _id: 1, host : "mongoshardan2:27017" },
         { _id: 2, host : "mongoshardan3:27017" }
      ]
   }
)

