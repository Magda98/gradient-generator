import {
  ChangeDetectionStrategy,
  Component,
  computed,
  model,
} from '@angular/core';
import { ColorPickerComponent } from '../color-picker/color-picker.component';
import { TrashIconComponent } from '../../shared/components/trash-icon.component';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { DragIconComponent } from '../../shared/components/drag-icon.component';

@Component({
  selector: 'gg-color-list',
  imports: [
    ColorPickerComponent,
    TrashIconComponent,
    CdkDropList,
    CdkDrag,
    DragIconComponent,
  ],
  template: `
    <div class="gg-color-list-header">
      <button class="gg-button" (click)="addColor()">Add Color</button>
    </div>
    <div cdkDropList (cdkDropListDropped)="drop($event)">
      @for (item of colorsEntries(); track item[0]) {
        <div cdkDrag class="gg-color-item">
          <button
            class="gg-button gg-button--icon gg-button--drag"
            (click)="removeColor(item[0])"
          >
            <gg-drag-icon></gg-drag-icon>
          </button>
          <gg-color-picker
            [color]="item[1]"
            (colorChange)="colorChange(item[0], $event)"
          ></gg-color-picker>
          <button
            class="gg-button gg-button--icon"
            (click)="removeColor(item[0])"
          >
            <gg-trash-icon></gg-trash-icon>
          </button>
        </div>
      }
    </div>
  `,
  styleUrl: './color-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorListComponent {
  colors = model<Record<string, string>>({});

  colorsEntries = computed(() => {
    return Object.entries(this.colors() ?? {});
  });

  colorChange(colorId: string, $event: string) {
    const newColors = { ...this.colors() };
    newColors[colorId] = $event;
    this.colors.set(newColors);
  }

  drop(event: CdkDragDrop<string[]>) {
    const colors = this.colorsEntries();
    moveItemInArray(colors, event.previousIndex, event.currentIndex);
    this.colors.set(Object.fromEntries(colors));
  }

  removeColor(colorId: string) {
    const newColors = { ...this.colors() };
    delete newColors[colorId];
    this.colors.set(newColors);
  }
  addColor() {
    const newColorId = `color${Object.keys(this.colors()).length + 1}`;
    this.colors.set({ ...this.colors(), [newColorId]: '#142243' });
  }
}
