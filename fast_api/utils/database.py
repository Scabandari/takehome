from databases import Database

# Proper PostgreSQL connection string
DATABASE_URL = "postgresql://postgres:postgres@localhost:5432/takehome" 

db = Database(DATABASE_URL, min_size=1, max_size=1)