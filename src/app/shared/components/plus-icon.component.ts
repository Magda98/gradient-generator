import { Component } from '@angular/core';

@Component({
  selector: 'gg-plus-icon',
  standalone: true,
  template: `
    <svg
      class="gg-plus-icon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        linecap="round"
        linejoin="round"
        width="2px"
        d="M9 12h6M12 9v6"
      />
      <path
        stroke="currentColor"
        width="2px"
        d="M3 12c0-7.412 1.588-9 9-9s9 1.588 9 9-1.588 9-9 9-9-1.588-9-9Z"
      />
    </svg>
  `,
  styles: [
    `
      :host {
        display: flex;
      }

      .gg-plus-icon {
        width: 24px;
        height: 24px;
        stroke-width: 2px;
      }
    `,
  ],
})
export class PlusIconComponent {}
