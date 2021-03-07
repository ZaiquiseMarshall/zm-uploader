import { Directive, EventEmitter, HostBinding, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[uploaderDir]'
})

export class UploaderDirective {
  @HostBinding('class.fileover') fileOver: boolean;
  @Output() fileDropped = new EventEmitter<any>(); 

 @HostListener('dragover', ['$event']) onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    this.fileOver = true;
  }
  
  @HostListener('dragleave', ['$event']) onDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    this.fileOver = false;
  }
  
  @HostListener('drop', ['$event']) ondrop(e) {
    e.preventDefault();
    e.stopPropagation();
    this.fileOver = false;
    let files = e.dataTransfer.files;
    if(files.length > 0) {
      this.fileDropped.emit(files)
    }
  }
}
