import { Component } from "@angular/core";

@Component({
    selector:'main-comp',
    template: `
    <main>
    <h2>{{titoloMain}} </h2>
    </main>`,
    styles:[
        `
        main{
            background-color: #ddd;
            border: 2px solid black;
        }`
    ]
})
export class MainComponent {
    titoloMain:string="Ristorante babbà";
}