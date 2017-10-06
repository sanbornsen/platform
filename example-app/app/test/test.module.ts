import { reducers } from './reducers/index';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { TestComponent } from './components/test.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: TestComponent,
      },
    ]),
    StoreModule.forFeature('counter', reducers),
  ],
  declarations: [TestComponent],
  providers: [],
})
export class TestModule {}
