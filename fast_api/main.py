from fastapi import (
    Body,
    FastAPI,
)
from starlette.middleware.cors import CORSMiddleware

from utils.database import db
from services.users import create_user, delete_user, fetch_users, update_user
from models.users import CreateUserPayload, User


app = FastAPI(debug=True)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup():
    await db.connect()
    query = "SET timezone = 'America/New_York';"
    await db.execute(query)


@app.on_event("shutdown")
async def shutdown():
    await db.disconnect()

@app.post("/users")
async def create_user_handler(payload: CreateUserPayload = Body(...)):
    user_id = await create_user(payload=payload)

    return {"user_id": user_id}


@app.get("/users")
async def fetch_users_handler():
    users = await fetch_users()

    return users


@app.delete("/users/{user_id}")
async def delete_user_handler(user_id: int):
    user_id = await delete_user(user_id=user_id)

    return {"user_id": user_id}


@app.put("/users")
async def update_user_handler(payload: User = Body(...)):
    user_id = await update_user(payload=payload)

    return {"user_id": user_id}

