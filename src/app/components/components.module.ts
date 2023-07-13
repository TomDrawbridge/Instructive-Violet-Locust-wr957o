import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { NavigationLinks } from './navigation-links/navigation-links.component'
import { Header } from './header/header.component'

@NgModule({
  declarations: [NavigationLinks, Header],
  imports: [CommonModule, RouterModule],
  exports: [NavigationLinks, Header],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
