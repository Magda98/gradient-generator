import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  input,
} from '@angular/core';
import 'syntax-highlight-element';

@Component({
  selector: 'gg-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeSnippetComponent implements AfterViewInit {
  code = input<string>(
    `background: linear-gradient(135deg, #42d392, #647eff);\n background-clip: text;\n -webkit-text-fill-color: transparent; `
  );
  private cdRef = inject(ChangeDetectorRef);

  ngAfterViewInit(): void {
    /**
     * after initialization, we need to manually detect changes
     * to trigger syntax highlighting
     */
    this.cdRef.detectChanges();
  }
}
