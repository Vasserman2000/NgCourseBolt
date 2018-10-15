import { Component } from "@angular/core";

@Component({
    selector: 'app-todo-list',
    template: `
        <div style='width:500px; height: 50px;'>
            <mat-form-field>
                <input matInput placeholder="Text description">
            </mat-form-field>
        </div>
    `
})

export class TodoList {
 a = ''
}