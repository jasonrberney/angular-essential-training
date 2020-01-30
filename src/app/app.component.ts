import { Component } from '@angular/core';

// can also use template and type html there instead of templateURL
// same with styles or styleUrls
// Decorators come with metadata options such as selector, etc.
@Component({
    selector: 'mw-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    firstMediaItem = {
        id: 1,
        name: 'Firebug',
        medium: 'Series',
        category: 'Science Fiction',
        year: 2010,
        watchedOn: null,
        isFavorite: false
    }

    onMediaItemDelete(mediaItem) {}
}
