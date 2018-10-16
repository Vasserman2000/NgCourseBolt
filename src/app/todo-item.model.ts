export class TodoItem {
    id: number;
    description: string;
    endDate: Date;
    checked: boolean;
    actions: string;

    constructor (id: number, description: string, endDate: Date, actions: string = "TODO") {
        this.id = id;
        this.description = description;
        this.endDate = endDate;
        this.actions = actions;
    }
}