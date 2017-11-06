import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { AppDemoComponent } from './app-demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

class AppComponent {
  title = 'Bananas grow on bushes.';

  hero = 'William Valhakis';

  colors = [
    { name: 'flax', value: 'E9D985', },
    { name: 'mistyMoss', value: 'B2BD7E', }, 
    { name: 'xanadu', value: '749C75', }, 
    { name: 'oldLavender', value: '6A5D7B', }, 
    { name: 'independence', value: '5D4A66', }, 
  ];

  monster: Monster = {
    name: 'Donald The Duck'
  };

  gods: God[] = [
    { id: 1, name: 'Aphrodite' } ,
    { id: 2, name: 'Apollo' } ,
    { id: 3, name: 'Ares' } ,
    { id: 4, name: 'Artemis' } ,
  ];

  person: Person = {
    id: 1,
    name: 'Viktor Valhakis'
  };

  selectedPerson: Person;
  persons: Person[] = [
    { id: 11, name: 'Lutfi Raghu' },
    { id: 12, name: 'Gaufrid Teodósio' },
    { id: 13, name: 'Darrin Randy' },
    { id: 14, name: 'Burkhart Kingston' },
    { id: 15, name: 'Bhaskara Alexandros' },
    { id: 16, name: 'Paulus Kuro' },
    { id: 17, name: 'Salomon Gyuri' },
    { id: 18, name: 'Mannes Lorens' },
    { id: 19, name: 'Eadbhárd Jaywant' },
  ];
  isPersonSelected(person: Person): boolean {
    return this.selectedPerson && person.id == this.selectedPerson.id;
  }
  selectPerson(person: Person): void {
    this.selectedPerson = person;
  }

  selectedGod: God;
  selectGod(god: God): void {
    this.selectedGod = god;
  }

}

@NgModule({
  declarations: [
    AppComponent,
    AppDemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})

class AppModule {

}
