import { Component, OnInit } from '@angular/core';
import { Commento } from '../modules/commento';

@Component({
  selector: 'app-gestione-commenti',
  templateUrl: './gestione-commenti.component.html',
  styleUrls: ['./gestione-commenti.component.css']
})
export class GestioneCommentiComponent implements OnInit {
  commenti:Commento[];
  commentoSelezionato?: Commento;
  constructor() { 
    this.commenti=[
      {
        "id": 9,
        "name": "provident id voluptas",
        "email": "Meghan_Littel@rene.us",
        "body": "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
      },
      {
        "id": 10,
        "name": "eaque et deleniti atque tenetur ut quo ut",
        "email": "Carmen_Keeling@caroline.name",
        "body": "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
      },
      {
        "id": 11,
        "name": "fugit labore quia mollitia quas deserunt nostrum sunt",
        "email": "Veronica_Goodwin@timmothy.net",
        "body": "ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea"
      },
      {
        "id": 12,
        "name": "modi ut eos dolores illum nam dolor",
        "email": "Oswald.Vandervort@leanne.org",
        "body": "expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit"
      },
      {
        "id": 13,
        "name": "aut inventore non pariatur sit vitae voluptatem sapiente",
        "email": "Kariane@jadyn.tv",
        "body": "fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et"
      },
      {
        "id": 14,
        "name": "et officiis id praesentium hic aut ipsa dolorem repudiandae",
        "email": "Nathan@solon.io",
        "body": "vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum"
      },
      {
        "id": 15,
        "name": "debitis magnam hic odit aut ullam nostrum tenetur",
        "email": "Maynard.Hodkiewicz@roberta.com",
        "body": "nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia"
      },
      {
        "id": 16,
        "name": "perferendis temporibus delectus optio ea eum ratione dolorum",
        "email": "Christine@ayana.info",
        "body": "iste ut laborum aliquid velit facere itaque\nquo ut soluta dicta voluptate\nerror tempore aut et\nsequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis"
      },
      {
        "id": 17,
        "name": "eos est animi quis",
        "email": "Preston_Hudson@blaise.tv",
        "body": "consequatur necessitatibus totam sed sit dolorum\nrecusandae quae odio excepturi voluptatum harum voluptas\nquisquam sit ad eveniet delectus\ndoloribus odio qui non labore"
      },
      {
        "id": 18,
        "name": "aut et tenetur ducimus illum aut nulla ab",
        "email": "Vincenza_Klocko@albertha.name",
        "body": "veritatis voluptates necessitatibus maiores corrupti\nneque et exercitationem amet sit et\nullam velit sit magnam laborum\nmagni ut molestias"
      },
      {
        "id": 19,
        "name": "sed impedit rerum quia et et inventore unde officiis",
        "email": "Madelynn.Gorczany@darion.biz",
        "body": "doloribus est illo sed minima aperiam\nut dignissimos accusantium tempore atque et aut molestiae\nmagni ut accusamus voluptatem quos ut voluptates\nquisquam porro sed architecto ut"
      },
    ]
    
  }

  ngOnInit(): void {
  }
  recuperaSelezione(commento:Commento):void{
    this.commentoSelezionato=commento
  }
  chiudi(){
    this.commentoSelezionato=undefined
  }

}
