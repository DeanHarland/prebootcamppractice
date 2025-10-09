from task_crud import add_task, show_tasks, mark_done, remove_task

while True:
    action = input("Choose an option: [add, show, done, remove, quit]: ").strip().lower()
    
    if action == "add":
        name = input("Task name: ").strip()
        add_task(name)
    elif action == "show":
        show_tasks()
    elif action == "done":
        task_id = int(input("Task ID to mark done: "))
        mark_done(task_id)
    elif action == "remove":
        task_id = int(input("Task ID to remove: "))
        remove_task(task_id)
    elif action == "quit":
        print("Goodbye!")
        break
    else:
        print("Invalid option.")