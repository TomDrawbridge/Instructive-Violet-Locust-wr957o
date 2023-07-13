import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { TestPage } from './test-page.component'

const routes = [
  {
    path: '',
    component: TestPage,
  },
]

@NgModule({
  declarations: [TestPage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [TestPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestPageModule {}
