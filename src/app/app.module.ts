import { NgModule, LOCALE_ID  } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeId from '@angular/common/locales/id';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// tslint:disable-next-line: max-line-length
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoriesResolver } from './pages/categories/categories.resolver';
import { CategoriesService } from './services/categories.service';

import { CategoryTasksResolver } from './pages/category-task/category-task.resolver';
import { CategoryTasksComponent } from './pages/category-task/category-task.component';
import { NewTaskModalComponent } from './pages/category-task/new-task/new-task-modal.component';
import { DeleteTaskModalComponent } from './pages/category-task/delete-task/delete-task-modal.component';
import { TaskService } from './services/task.service';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localeId);

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryTasksComponent,
    NewTaskModalComponent,
    DeleteTaskModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  entryComponents: [
    DeleteTaskModalComponent,
    NewTaskModalComponent,
  ],
  providers: [
    CategoriesService,
    TaskService,
    CategoryTasksResolver,
    CategoriesResolver,
    {provide: LOCALE_ID,
      useValue: 'id-ID'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
