import { Injectable } from '@angular/core';
import { TaskApi, Task, LoopBackFilter } from '../../../sdk';


@Injectable()
export class TaskService {
  constructor(
    private taskApi: TaskApi
  ){}

  getTasks(){
   return this.taskApi.find<Task>()
   .toPromise()
  }

  getTask(TaskId){
    let query = {
      id: TaskId
    }
    return this.taskApi.find<Task>({where: query})
    .toPromise()
  }

  getTasksByCategory(category_slug){
    return this.taskApi.find<Task>()
    .toPromise()
  }

  getTaskBySlug(slug){
    return this.taskApi.findOne<Task>()
    .toPromise()
  }

  deleteTask(id){
    return this.taskApi.deleteById<Task>(id).toPromise()
  }

  updateTask(Task){
    return this.taskApi.updateAttributes<Task>(Task.id, Task).toPromise()
  }

  createTask(values){
    return this.taskApi.create<Task>(values).toPromise()
  }

}
