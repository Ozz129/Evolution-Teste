import { Time } from '@angular/common';

export class Task {
    constructor(
        public id: number,
        public name: string,
        public priority: string,
        public expiration: any,
        public description: string,
        public user: number
    ){

    }
}