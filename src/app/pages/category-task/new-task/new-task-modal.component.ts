import { Component, OnInit, Inject} from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { TaskService } from '../../../services/task.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { formatDate } from '@angular/common';

@Component({
  selector: 'new-task-modal',
  templateUrl: './new-task-modal.component.html',
  exportAs: 'newTaskModal',
  styleUrls: ['../../../styles/modals.scss']
})

export class NewTaskModalComponent implements OnInit{

  taskForm: FormGroup;
  curDate=new Date();
  url:String;
  form_validation_messages = {
    'title': [
      { type: 'required', message: 'Title is required' }
    ],
    'content':[
      {type : 'required', message:'Content must be filled'}
    ],
  }
  constructor(
    public taskService: TaskService,
    private activatedRoute: ActivatedRoute,
    public thisDialogRef: MatDialogRef<NewTaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
  ){
    let str, num;
    str = activatedRoute.snapshot['_routerState'].url;
    num = str.lastIndexOf('/');
    this.url = str.substring(num+1);

   }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      category:new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      dueDate: new FormControl((new Date()).toISOString())
    })
  }

  onCloseCancel() {
    this.thisDialogRef.close();
    this.taskForm.reset();
  }

  onSubmit(values){
    let data: any = {};
    data.category = this.url;
    data.title = values.title;
    data.content = values.content;
    data.dueDate = values.dueDate;
    //create new task
    this.taskService.createTask(data)
    .then(question => {
      this.thisDialogRef.close(question);
      this.taskForm.reset();
    });
  }
}
