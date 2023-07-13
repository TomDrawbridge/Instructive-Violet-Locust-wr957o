import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class Header {
  @Input()
  image_src: string =
    'https://presentation-website-assets.teleporthq.io/logos/logo.png'
  @Input()
  image_alt2: string = 'logo'
  @Input()
  Register: string = 'Register'
  @Input()
  image_alt11: string = 'image'
  @Input()
  image_alt1: string = 'image'
  @Input()
  image_src11: string =
    'https://presentation-website-assets.teleporthq.io/logos/logo.png'
  @Input()
  image_alt: string = 'logo'
  @Input()
  image_src1: string =
    'https://presentation-website-assets.teleporthq.io/logos/logo.png'
  @Input()
  Login1: string = 'Login'
  @Input()
  Login: string = 'Login'
  @Input()
  image_src2: string =
    'https://presentation-website-assets.teleporthq.io/logos/logo.png'
  @Input()
  Register1: string = 'Register'
  Variant: number = 1
  Variant1: number = 2
  constructor() {}
}
