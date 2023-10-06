import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <header>
          <h1>Styling Angular Applications</h1>
          <em>For Modern Angular Applications</em>
      </header>
      <div>
          <app-nav></app-nav>
      </div>
  `
})

export class AppComponent {
}