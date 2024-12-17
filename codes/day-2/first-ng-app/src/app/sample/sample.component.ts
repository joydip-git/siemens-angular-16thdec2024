import { Component } from "@angular/core";

@Component({
    selector: 'app-sample',
    templateUrl: './sample.component.html',
    styleUrl: './sample.component.css'
})
export class SampleComponent {
    name = 'joydip'
    width = 300

    updateName(value: string) {
        this.name = value
    }
}