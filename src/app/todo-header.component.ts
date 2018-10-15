import { Component } from "@angular/core";

@Component({
    selector: 'app-todo-header',
    template: `
        <style>
            .header {
                position: relative;
                height: 100px;
                background-color: lightgrey;
                width: 100%;
            }
        </style>
        <div class='header'>
            <app-progress-bar></app-progress-bar>
        </div>
    `
})

export class Header {
    x = '';
}