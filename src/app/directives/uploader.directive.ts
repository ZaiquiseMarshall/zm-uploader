import { Directive, EventEmitter, HostBinding, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appUploader]'
})

export class UploaderDirective {
  @HostBinding('class.fileover') fileOver: boolean;
  @Output() fileDropped = new EventEmitter<any>(); 

  @HostListener('dragover', ['$event']) onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    this.fileOver = true;
  }
  
  @HostListener('dragover', ['$event']) public onDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    this.fileOver = false;
  }
  
  @HostListener('dragover', ['$event']) public ondrop(e) {
    e.preventDefault();
    e.stopPropagation();
    this.fileOver = false;
    let files = e.dataTransfer.files;
    if(files.length > 0) {
      this.fileDropped.emit(files)
    }
  }

  constructor() { }
}
