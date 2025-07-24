import { Component } from "@angular/core";

@Component({
  selector: 'gg-drag-icon',
  standalone: true,
  template: `
      <svg class="gg-drag-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path stroke="currentColor" fill="currentColor" d="M10 4a2 2 0 1 1-2-2 2 2 0 0 1 2 2Zm-2 6a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm0 8a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm8-12a2 2 0 1 0-2-2 2 2 0 0 0 2 2Zm0 8a2 2 0 1 0-2-2 2 2 0 0 0 2 2Zm0 8a2 2 0 1 0-2-2 2 2 0 0 0 2 2Z"/></svg>
      `,
  styles: [`
    .gg-drag-icon{
      width: 24px;
      height: 24px;
    }
  `]
})
export class DragIconComponent {
}
