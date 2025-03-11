from datetime import date
from models.camel import CamelModel


class User(CamelModel):
    id: int
    user_name: str
    first_name: str
    last_name: str
    date_of_birth: date


class CreateUserPayload(CamelModel):
    user_name: str
    first_name: str
    last_name: str
    date_of_birth: date