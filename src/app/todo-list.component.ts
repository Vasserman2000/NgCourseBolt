import { Component } from "@angular/core";
import { TodoItem } from "../app/todo-item.model";

@Component({
    selector: 'app-todo-list',
    template: `
        <form style="margin-left: 40px;" class="example-form">
            <mat-form-field>
                <input matInput placeholder="Text description" #d>
            </mat-form-field>
            <mat-form-field style='margin-left:20px;'>
            <input matInput [matDatepicker]="picker" placeholder="Choose a date" #ed>
                <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
                <mat-datepicker #picker></mat-datepicker>
            </mat-form-field>
            <button style='margin-left:20px;' mat-raised-button color="primary" (click)="addTask(d.value, ed.value)">Add Task</button>
        </form>

        <br><br>
        <table  style="margin-left: 40px; width: 90%" mat-table [dataSource]="dataSource" class="mat-elevation-z8">

            <ng-container matColumnDef="id">
                <th style="width: 40px;" mat-header-cell *matHeaderCellDef> id </th>
                <td style="width: 40px;" mat-cell *matCellDef="let element"> {{element.id}} </td>
            </ng-container>

            <ng-container matColumnDef="descriptions">
                <th mat-header-cell *matHeaderCellDef> descriptions </th>
                <td mat-cell *matCellDef="let element"> {{element.descriptions}} </td>
            </ng-container>

            <ng-container matColumnDef="endDate">
                <th mat-header-cell *matHeaderCellDef> End D. </th>
                <td mat-cell *matCellDef="let element"> {{element.endDate}} </td>
            </ng-container>
            
            <ng-container matColumnDef="check">
                <th mat-header-cell *matHeaderCellDef> Check </th>
                <td mat-cell *matCellDef="let element"> <mat-checkbox></mat-checkbox> </td>
            </ng-container>
            
            <ng-container matColumnDef="actions">
                <th mat-header-cell *matHeaderCellDef> Actions </th>
                <td mat-cell *matCellDef="let element"> {{element.actions}} </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
            </table>
            
    `
})

export class TodoList {

    todoList: TodoItem[] = [];

    displayedColumns: string[] = ['id', 'descriptions', 'endDate', 'check', 'actions'];

    dataSource =  this.todoList;

    addTask (description: string, endDate: Date) {

        this.todoList.push(new TodoItem(this.todoList.length, description, endDate));
        
        this.dataSource = [...this.todoList];
    }
}
  