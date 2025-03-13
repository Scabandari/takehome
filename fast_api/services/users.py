from loguru import logger
from fastapi import HTTPException


from utils.error import extract_exception_message
from models.users import CreateUserPayload, User
from utils.database import db


async def create_user(payload: CreateUserPayload):
    logger.info(f"Creating user with payload {payload}")

    query = """
        INSERT INTO users (user_name, first_name, last_name, date_of_birth) 
        VALUES (
            :user_name, 
            :first_name,
            :last_name,
            :date_of_birth
        )
        RETURNING id;
    """

    values = {
        "user_name": payload.user_name,
        "first_name": payload.first_name,
        "last_name": payload.last_name,
        "date_of_birth": payload.date_of_birth,
    }

    try:
        result = await db.fetch_one(query=query, values=values)

        logger.success("User created")

        return result

    except Exception as e:
        error_msg = extract_exception_message(e)
        logger.error(f"Error creating User: {error_msg}")

        raise e


async def update_user(payload: User):
    logger.info(f"Updating User {payload.id}")

    query = """
        UPDATE users 
        SET 
            user_name=:user_name,
            first_name=:first_name,
            last_name=:last_name,
            date_of_birth=:date_of_birth
        WHERE id=:id
        RETURNING id;
    """

    values = {
        "id": payload.id,
        "user_name": payload.user_name,
        "first_name": payload.first_name,
        "last_name": payload.last_name,
        "date_of_birth": payload.date_of_birth if payload.date_of_birth else None,
    }

    try:
        result = await db.fetch_one(query, values)

        if not result:
            raise HTTPException(
                status_code=404,
                detail=f"No user found with id: {payload.id}",
            )
    
        logger.success(f"Updated User {payload.id}")

        return result
    
    except Exception as e:
        error_msg = extract_exception_message(e)

        logger.error(f"Error updating User: {payload.id}"
                     f" Error: {error_msg}")

        raise e


async def fetch_users():
    logger.info("Fetching Users")

    query = """
        SELECT * FROM users 
    """

    try: 
        users = await db.fetch_all(query)

        if not users:
            logger.warning("No users found") 

            return []

        logger.success(f"Fetched {len(users)} User records")

        return users
    
    except Exception as e:
        error_msg = extract_exception_message(e)

        logger.error(f"Error fetching users: {error_msg}")

        raise e

async def delete_user(user_id: int):
    logger.info(f"Deleting User {user_id}")

    query = """
        DELETE from users
        WHERE id = :user_id
        RETURNING id;
    """

    values = {"user_id": user_id}

    try:
        result = await db.fetch_one(query, values)

        if not result:
            logger.error(f"Delete failed, no User found with id: {user_id}")

            raise HTTPException(
                status=404,
                detail="User not found"
            )
        
        logger.success(f"Deleted User with id: {user_id}")

        return result

    except Exception as e:
        error_msg = extract_exception_message(e)

        logger.error(f"Error deleting User with id: {user_id}"
                     f" Error: {error_msg}")


    

