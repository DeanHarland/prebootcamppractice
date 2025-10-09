from sqlalchemy import Column, Integer, String, Boolean
from db_setup import Base, engine

class Task(Base):
    __tablename__ = "tasks"  # table name in Postgres

    id = Column(Integer, primary_key=True) #primary key, unique for each task
    name = Column(String, nullable=False)  #task name, required (nullable=False)
    done = Column(Boolean, default=False)   #True/False if completed

# Create table in database -  actually creates the table in Postgres
Base.metadata.create_all(engine)    