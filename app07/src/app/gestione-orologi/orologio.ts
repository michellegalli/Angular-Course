export class Orologio{
    
    constructor(public ore: number, public minuti: number){
        
    }
    vediOrario():string{
        let oreStringa: string = this.ore+'';
        let minutiStringa: string = this.minuti+'';

        if(oreStringa.length < 2)
            oreStringa= '0'+oreStringa;
        if(minutiStringa.length < 2)
            minutiStringa= '0'+minutiStringa;
        
        return"Sono le ore "+oreStringa+ ':'+ minutiStringa;
    }
}