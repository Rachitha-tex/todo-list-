const form=document.querySelector("#form");
const input=document.querySelector(".input");
const todosUL=document.querySelector("#todos");

const todos=JSON.parse(localStorage.getItem('todos'));

if(todos){
    todos.forEach((todo)=>{
        addTodo(todo);
    })
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
     addTodo();


});

    function addTodo(todo){
        let todoText=input.value;
         if(todo){
             todoText=todo.text;
        }

        if(todoText){
            const elem=document.createElement('li');
            if(todo && todo.completed){
                elem.classList.add('completed');
            }
            const selectBtn=document.createElement('button');
            const deleteBtn=document.createElement('button');
            
            selectBtn.innerHTML=`
            <i class="fas fa-check"><i/>
            `
            deleteBtn.innerHTML=`
            <i class="fas fa-trash">
            </i>
        
            <style>
             
            .fas{
                font-size:20px;
                displya:flex;
                align-items:flex-end;
              
            }
        
              
        
            </style>
            `
            selectBtn.addEventListener('click',()=>{
                elem.classList.toggle('completed');
                localStore();
            })
            deleteBtn.addEventListener('click',()=>{
                elem.remove();
                localStore();
            })
            elem.innerText=todoText;
            elem.appendChild(selectBtn);
            elem.appendChild(deleteBtn);
            todosUL.appendChild(elem);
            input.value="";
            localStore();
        }
    }
    function localStore(){
        const todosEl=document.querySelectorAll("li");
        const todos=[];
     todosEl.forEach(todosEl=>{
        todos.push({
            text:todosEl.innerText,
            completed:todosEl.classList.contains('completed'),
        });
     });
     localStorage.setItem("todos",JSON.stringify
     (todos));
        
    }


