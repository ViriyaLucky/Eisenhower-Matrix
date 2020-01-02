import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../../../sdk/models/Task';
import { MatDialog } from '@angular/material';
import { DeleteTaskModalComponent } from './delete-task/delete-task-modal.component';
import { NewTaskModalComponent } from './new-task/new-task-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'category-tasks',
  styleUrls: ['./category-task.scss'],
  templateUrl: './category-task.component.html'
})

export class CategoryTasksComponent implements OnInit {

  task: Array<Task> = [];
  categoryTitle: string;
  categorySlug: any;

  constructor(
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    public taskService: TaskService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.task = data.tasks;
        this.categoryTitle = data.category_title;
        this.categorySlug = data.category_slug;
      }
    })

  }

  getTasks() {
    this.taskService.getTasksByCategory()
      .then(task => this.task = task);
  }

  openNewTaskModal(categorySlug) {
    let dialogRef = this.dialog.open(NewTaskModalComponent, {
      data: { categorySlug: categorySlug }
    });

    dialogRef.afterClosed().subscribe(tasks => {
      if (tasks) {
        this._snackBar.open("Success!", 'Close', {
          duration: 2000,
          panelClass: ['green-snackbar']
        });
        this.addTaskToList(tasks);
      }
    })
  }

  delete(id) {
    let dialogRef = this.dialog.open(DeleteTaskModalComponent, {
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(confirm => {
      if (confirm) {
        // refresh the Tasks list
        this._snackBar.open("Deleted!", 'Close', {
          duration: 2000,
          panelClass: ['red-snackbar']
        });
        var index = this.task.findIndex((Task) => Task.id === id);
        this.task.splice(index, 1);
      }
    });
  }
  addTaskToList(tasks) {
    this.task.push(tasks);
  }

}
