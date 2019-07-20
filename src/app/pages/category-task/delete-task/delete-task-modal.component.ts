import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'delete-task-modal',
  templateUrl: 'delete-task-modal.component.html',
  styleUrls: ['../../../styles/modals.scss']
})

export class DeleteTaskModalComponent {
  constructor(
    public thisDialogRef: MatDialogRef<DeleteTaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    public taskService: TaskService,
  ){}

  onCloseConfirm() {
    console.log(this.modalData.id);
    this.taskService.deleteTask(this.modalData.id)
    .then(res => {
      this.thisDialogRef.close(true);
    })
  }

  onCloseCancel() {
    this.thisDialogRef.close(false);
  }

}
