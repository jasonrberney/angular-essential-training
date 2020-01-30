import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
// everything defined in component is made available in the template (no 'this' or anything)
export class MediaItemComponent {
    // Input can take an alias which can be referenced in the html markup and it will still be considered/mapped 'mediaItem'
    @Input() mediaItem;
    @Output() delete = new EventEmitter();

    onDelete() {
        console.log('delete')
        this.delete.emit(this.mediaItem);
    }
}