import { Injectable } from "@angular/core";
import { nomi } from "../data/nomi";


@Injectable({providedIn:'root'})
export class NomeService{

getNomi(): string[]{
    return nomi;
}

addNome(nome:string):void{
nomi.push(nome)
}
}