/* tslint:disable */

declare var Object: any;
export interface TaskInterface {
  "category": string;
  "title"?: string;
  "content": string;
  "dueDate": string;
  "id"?: any;
}

export class Task implements TaskInterface {
  "category": string;
  "title": string;
  "content": string;
  "dueDate": string;
  "id": any;
  constructor(data?: TaskInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Task`.
   */
  public static getModelName() {
    return "Task";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Task for dynamic purposes.
  **/
  public static factory(data: TaskInterface): Task{
    return new Task(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Task',
      plural: 'Tasks',
      path: 'Tasks',
      idName: 'id',
      properties: {
        "category": {
          name: 'category',
          type: 'string'
        },
        "title": {
          name: 'title',
          type: 'string'
        },
        "content": {
          name: 'content',
          type: 'string'
        },
        "dueDate": {
          name: 'dueDate',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
