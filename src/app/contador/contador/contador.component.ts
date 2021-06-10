import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: ` <h1> {{ titulo }}</h1>
                <h3> {{ base_resultado }}</h3>
                <button (click)="acumular(+this.base)"> + {{ base }}</button>
                <span> {{ numero }}</span>
                <button (click)="acumular(-this.base)"> - {{ base }}</button>`
})
export class ContadorComponent {
    public titulo: string = 'Contador App';
    public numero: number = 10;
    public base: number = 6;
    public base_resultado: number = 10;
    acumular(valor: number) {
        this.base_resultado += valor;
    }
}