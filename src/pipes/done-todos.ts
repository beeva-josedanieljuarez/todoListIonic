import { Pipe, PipeTransform } from '@angular/core';
import { TodoModel } from '../shared/todo-model'

/**
 * Generated class for the DoneTodosPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'doneTodosPipe'
})
export class DoneTodosPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(todos: TodoModel[]) {
    console.log("done todos pipe");
    return todos.filter(todo => todo.isDone);
  }
}
