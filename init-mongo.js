
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

db.createUser(
	{
		user : "User1",
		pwd : "UserPass",
		roles : [
			{
				role : "readWrite",
				db : "DataLogger"
			}
		]
	}
)

db.createCollection('invernadero');

db.createCollection('urls');