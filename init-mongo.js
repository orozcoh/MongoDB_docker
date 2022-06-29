
db.createUser(
	{
		user : "User0",
		pwd : "UserPass",
		roles : [
			{
				role : "readWrite",
				db : "DataLogger"
			}
		]
	}
)

db.createCollection('Invernadero');