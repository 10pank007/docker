db.createUser(
    {
        user: "userm",
        pwd: "userm",
        roles: [
            {
                role: "readWrite",
                db: "june-2023"
            }
        ]
    }
)