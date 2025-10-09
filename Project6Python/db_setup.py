from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# 1. Connect to Postgres  -- tells Python where the DB is and what driver to use
engine = create_engine("postgresql+psycopg://postgres:Redfred1@localhost:5432/task_db")

# 2. Base class for ORM models - base class for the tables
Base = declarative_base()

# 3. Session to interact with DB - Python object to query, add, update, delete rows
Session = sessionmaker(bind=engine)
session = Session()