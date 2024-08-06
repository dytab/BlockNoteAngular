import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Block, BlockNoteEditor } from '@blocknote/core';
import { BnaEditorComponent } from '@dytab/block-note-angular';

@Component({
  selector: 'bna-selection-blocks-example',
  standalone: true,
  imports: [CommonModule, BnaEditorComponent],
  template: `
    <p>Input (BlockNote Editor)</p>
    <bna-editor
      class="h-[250px] block"
      [initialContent]="initialContent"
      (selectedBlocks)="onSelectionChanged($event)"
    />
    <p>
      Selection Blocks (JSON): <strong>{{ selectedBlocks }}</strong> Blocks
      selected
    </p>
    <div
      class="border border-black bg-background rounded min-h-20 w-full p-2 max-h-[400px] overflow-auto"
    >
      <pre><code>{{ content }}</code></pre>
    </div>
  `,
})
export class SelectionBlocksExample {
  initialContent = [
    {
      type: 'paragraph',
      content: 'Welcome to this demo!',
    },
    {
      type: 'paragraph',
      content: 'Select different blocks to see the JSON change below',
    },
    {
      type: 'paragraph',
    },
  ] as any;
  editor!: BlockNoteEditor;
  selectedBlocks = 0;
  content = '';

  onSelectionChanged(data: Block[]) {
    this.selectedBlocks = data.length;
    this.content = JSON.stringify(data, null, 2);
  }
}

export const selectionBlocksExampleCode = `import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BnaEditorComponent } from '@dytab/block-note-angular';

@Component({
  standalone: true,
  imports: [CommonModule, BnaEditorComponent],
  template: \` <bna-editor [initialContent]="initialContent" /> \`,
})
export class BasicSetupExample {
  initialContent = undefined;
}`;
