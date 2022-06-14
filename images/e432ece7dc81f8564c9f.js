import"./styles/normalize.css";import"./styles/style.css";import{RenderElements}from"./renderElements";import{createTodo}from"./create-todo";const tasks=[];function addTaskToProject(e){e.preventDefault();const t=document.querySelector(".input-title"),o=document.querySelector(".input-description"),s=document.querySelector(".select-priority"),r=document.querySelector(".input-due-date");if(!t.value)return void(t.style.borderColor="#DC3545");const c=createTodo(t.value,o.value,r.value,s.value);tasks.push(c),RenderElements.createTask(c),RenderElements.clearNewTasksInputs(t,o,s,r),RenderElements.hideAddTaskModal()}const addTaskBtns=document.querySelectorAll(".add-task");addTaskBtns.forEach((e=>{e.addEventListener("click",RenderElements.showAddTaskModal)}));const createTaskBtn=document.querySelector(".create-task-btn");createTaskBtn.addEventListener("click",addTaskToProject);const projectButton=document.querySelector(".projects-btn-container"),showProjectsList=()=>{document.querySelector(".projects-container").classList.toggle("show-projects-list")};projectButton.addEventListener("click",showProjectsList);