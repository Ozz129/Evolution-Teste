import { Time } from '@angular/common';

export class Task {
    constructor(
        public id: number,
        public nameTask: string,
        public priorityTask: string,
        public expirationTask: any,
        public descriptionTask: string,
        public userTask: number
    ){

    }
}