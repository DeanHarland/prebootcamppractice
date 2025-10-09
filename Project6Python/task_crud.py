from db_setup import session
from task_table_app import Task  # the Task class from task_table_app

# CREATE
def add_task(name):
    new_task = Task(name=name)
    session.add(new_task)
    session.commit()
    print(f"Task '{name}' added.")

# READ
def show_tasks():
    tasks = session.query(Task).all()
    if tasks:
        for task in tasks:
            status = "✔" if task.done else "❌"
            print(f"{task.id}. {task.name} [{status}]")
    else:
        print("No tasks yet.")

# UPDATE
def mark_done(task_id):
    task = session.query(Task).get(task_id)
    if task:
        task.done = True
        session.commit()
        print(f"Task '{task.name}' marked as done.")
    else:
        print("Task not found.")

# DELETE
def remove_task(task_id):
    task = session.query(Task).get(task_id)
    if task:
        session.delete(task)
        session.commit()
        print(f"Task '{task.name}' removed.")
    else:
        print("Task not found.")