import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'test-page',
  templateUrl: 'test-page.component.html',
  styleUrls: ['test-page.component.css'],
})
export class TestPage {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Test-page - Instructive Violet Locust')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Test-page - Instructive Violet Locust',
      },
    ])
  }
}
