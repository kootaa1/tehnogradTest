export class Todo {
    id: number;
    name: string = '';
    isComplete: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
