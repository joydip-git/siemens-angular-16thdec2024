import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TodosService {
    getTitle() {
        return 'Welcome to Angular Testing'
    }
}