import { ItemService } from './services/item.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shop';

  constructor(private ItemService : ItemService) {}
  food$: any = new Observable<Object>;
  id: string = '';
  name: string = '';
  dicription: string = '';

  getall()
  {
    this.food$ = this.ItemService.getAll();
  }

  postFood()
  {
    this.ItemService.postFood({
      id : this.id,
      name: this.name,
      dicription : this.dicription
    });

    this.id = '';
    this.name = '';
    this.dicription=  '';

  }
}
