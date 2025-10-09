# loop through task set and print task to cmd
def show_tasks(tasks):
    if tasks:
        for task in tasks:
            print(f"- {task}")
    else:
        print("Tasks is empty.")
# add the inputed task to the set
def add_tasks(task):
    tasks.append(task)
    print(f"Task '{task}' added." )
# if the inputted task is in tasks remove it else print not found
def remove_task(task):
    if task in tasks:
        tasks.remove(task)
        print(f"{task} has been removed.")
    else:
        print(f"{task} Not found.")

# main tasks set
tasks=[]
#while running ask input option then run depending on what is inputed else return invalid option
while True:
    action = input("Choose an option: [add, show,remove, quit]").strip().lower() #Used because if user enter Add or aDd or add     and loads of spaces it wont register it
    if action == "show":
        show_tasks(tasks)
    elif action == "add":
        task = input("Input task.").strip() # used so it will match if user adds too many spaces
        add_tasks(task)
    elif action == "remove":
        task = input("Input task to be removed: ")
        remove_task(task)
    elif action == "quit":
        break
    else:
        print("Invalid option")