
        var inputBar = document.querySelector("#input");
        var addBtn = document.querySelector("#add-btn");
        var currentTask = "";
        var todo = document.querySelector("#todo");
        var menu = document.querySelector("#menu");
        var counter = 0;
        var numberOfTasks = document.querySelector("#number-of-tasks");
        numberOfTasks.innerText = counter;
        var popup = document.querySelector("#popup");

        window.onload = () => {
            inputBar.addEventListener("keypress", (event) => {
            })

            addBtn.addEventListener("click", createTodoItem);

            function createTodoItem() {
                // create a new list item    
                var newItem = createList();
                // append it to the ul list item
                todo.appendChild(newItem);
                // increase number of tasks
                increaseNumberOfTasksBy1AndUpdate();

                // clear the inputBar and tempStoredValue
                inputBar.value = "";
                currentTask = "";
            }

            function createList() {
                // create a new list item    
                var newItem = document.createElement("li");
                newItem.className = "item-new";

                //create the todo text
                var text = createTodoText();
                if (text == null) return;
                newItem.appendChild(text);

                //create a close button
                var closeBtn = createCloseButton()
                newItem.appendChild(closeBtn);
                newItem.addEventListener("click", checked);

                return newItem;
            }
            
            function createTodoText() {
                currentTask = inputBar.value;
                if (currentTask === "") {
                    alert("You need to provide the task");
                    return null;
                } else {
                    var text = document.createTextNode(currentTask);
                    text.className = "task";
                    return text;
                }
            }

            function createCloseButton() {
                var closeBtn = document.createElement("button");
                var closeIcon = createCloseIcon();
                closeBtn.appendChild(closeIcon);
                closeBtn.addEventListener("click", close);
                closeBtn.className = "close-btn";
                return closeBtn;
            }

            function createCloseIcon() {
                var closeIcon = document.createTextNode("\u00D7");
                return closeIcon;
            }

            function increaseNumberOfTasksBy1AndUpdate() {
                counter++;
                numberOfTasks.innerText = counter;
            }

            function decreaseNumberOfTasksBy1AndUpdate() {
                counter--;
                numberOfTasks.innerText = counter;
            }
            // click to toggle on or off
            checked = async (e) => {
                // e.stopPropagation()
                console.log("In checked function", e.target.classList);
                if (e.target.classList[0] == "item-new") {
                    e.target.classList.remove("item-new");
                    e.target.classList.add("item-finished");
                    // the announcement functionality
                    // popup.classList.add("popup");
                    // popup.classList.remove("popup");
                }
                else if (e.target.classList[0] == "item-finished") {
                    e.target.classList.remove("item-finished");
                    e.target.classList.add("item-new");
                }
            }

            function close(e) {
                e.stopPropagation();
                decreaseNumberOfTasksBy1AndUpdate();
                e.target.parentNode.classList.add("no-display")
            }
        }
 