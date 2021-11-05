export class Promemoria {
    userId: number;
    id: number;
    title: string;
    completed: boolean;

    constructor(uI:number, i:number, t:string, c:boolean){
        this.userId= uI;
        this.id= i;
        this.title=t;
        this.completed=c;
    }
    
}

