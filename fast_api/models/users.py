from datetime import date
from typing import Optional

from pydantic import BaseModel


class User(BaseModel):
    id: int
    user_name: str
    first_name: str
    last_name: str
    date_of_birth: Optional[date] = None


class CreateUserPayload(BaseModel):
    user_name: str
    first_name: str
    last_name: str
    date_of_birth: Optional[date] = None