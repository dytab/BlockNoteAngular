import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  BlockFromConfig,
  BlockNoteEditor,
  FileBlockConfig,
} from '@blocknote/core';
import { NgxBlocknoteService } from '../../services/ngx-blocknote.service';
import {
  HlmButtonDirective,
  HlmInputDirective,
  HlmTabsComponent,
  HlmTabsContentDirective,
  HlmTabsListComponent,
  HlmTabsTriggerDirective,
} from '../../ui';

@Component({
  selector: 'bna-file-panel',
  standalone: true,
  imports: [
    HlmInputDirective,
    HlmTabsComponent,
    HlmTabsListComponent,
    HlmButtonDirective,
    FormsModule,
    HlmTabsTriggerDirective,
    HlmTabsContentDirective,
    ReactiveFormsModule,
  ],
  templateUrl: './bna-file-panel.component.html',
})
export class BnaFilePanelComponent implements OnInit {
  focusedBlock = signal<BlockFromConfig<FileBlockConfig, any, any> | undefined>(
    undefined,
  );

  embedInputText = '';
  fileControl = new FormControl();

  constructor(private ngxBlockNoteService: NgxBlocknoteService) {
    const editor = this.ngxBlockNoteService.editor();
    editor.filePanel?.onUpdate(async (filePanelState) => {
      if (!filePanelState.show) {
        this.focusedBlock.set(undefined);
      } else {
        this.focusedBlock.set(filePanelState.block);
      }
    });
  }

  ngOnInit() {
    const editor = this.ngxBlockNoteService.editor();
    const block = editor.getTextCursorPosition().block;
    this.focusedBlock.set(block as any);
  }

  async onFileInputChanged(event: Event) {
    const editor = this.ngxBlockNoteService.editor();
    const focusedBlock = this.focusedBlock();
    if (!editor.uploadFile || !focusedBlock) {
      console.error('uploadFile was not provided in editor options');
      return;
    }

    const files = (event.target as HTMLInputElement).files;
    if (!files) return;

    const file = files[0];
    const fileUrl = await editor.uploadFile(file);
    this.updateBlockWithEmbedFileUrl(focusedBlock, editor, fileUrl);
    this.focusedBlock.set(undefined);
    this.fileControl.reset();
  }

  insertEmbedFile(embedFileUrl: string) {
    const editor = this.ngxBlockNoteService.editor();
    const focusedBlock = this.focusedBlock();
    if (!focusedBlock) return;
    this.updateBlockWithEmbedFileUrl(focusedBlock, editor, embedFileUrl);
  }

  private updateBlockWithEmbedFileUrl(
    block: BlockFromConfig<FileBlockConfig, any, any>,
    editor: BlockNoteEditor<any, any, any>,
    embedFileUrl: string | Record<string, any>,
  ) {
    editor.updateBlock(block, {
      props: {
        url: embedFileUrl,
      },
    });
    editor.filePanel?.closeMenu();
    editor.focus();
  }
}
