rs.initiate(
   {
      _id: "conf",
      configsvr: true,
      members: [
         { _id: 0, host : "mongoconfig1:27017" },
         { _id: 1, host : "mongoconfig2:27017" },
         { _id: 2, host : "mongoconfig3:27017" }
      ]
   }
)
