import { Component } from '@angular/core';
import { of } from 'rxjs';

of(1,2,3).subscribe(value => {
  console.log(value);
  });

@Component({
  selector: 'app-root',
  template: `
    
  `,
  styles: []
})
export class AppComponent {
  title = 'rxjs-start';
}
