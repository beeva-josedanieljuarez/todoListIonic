import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import { TodoModel} from "./todo-model";

/*
  Generated class for the TodoServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TodoServiceProvider {

  private todos: TodoModel[];

  constructor(public http: Http) {
    this.getTodos();
  }

  getTodos(){
    this.todos = [
      new TodoModel("this is an element"),
      new TodoModel("this is an element"),
      new TodoModel("this is an element"),
      new TodoModel("this is an element",true),
      new TodoModel("this is an element"),
      new TodoModel("this is an element"),
      new TodoModel("this is an element"),
      new TodoModel("this is an element"),
      new TodoModel("this is an element"),
      new TodoModel("this is an element"),
      new TodoModel("this is an element"),
      new TodoModel("this is an element"),
      new TodoModel("this is an element"),
      new TodoModel("this is an element"),
      new TodoModel("this is an element"),
      new TodoModel("this is an element"),
      new TodoModel("this is an element", false, true),
      new TodoModel("this is an element"),
      new TodoModel("this is an element")
    ];
  }

  toogleTodo(todo:TodoModel){
    let isDone = !todo.isDone;
    const todoIndex = this.todos.indexOf(todo);
    let updatedTodo = new TodoModel(todo.description, todo.isImportant, isDone);
    this.todos = [
      ...this.todos.slice(0,todoIndex),
      updatedTodo,
      ...this.todos.slice(todoIndex+1)
    ];
  }

  addTodo(todo:TodoModel){
    this.todos = [ ...this.todos, todo];
  }

  removeTodo(todo:TodoModel){
    const index = this.todos.indexOf(todo);
    this.todos = [
      ...this.todos.slice(0,index),
      ...this.todos.slice(index+1)
    ];
  }

  updateTodo(todo:TodoModel,modifiedTodo:TodoModel){
    const index = this.todos.indexOf(todo);
    this.todos = [
      ...this.todos.slice(0,index),
      modifiedTodo,
      ...this.todos.slice(index+1)
    ];
  }

}
