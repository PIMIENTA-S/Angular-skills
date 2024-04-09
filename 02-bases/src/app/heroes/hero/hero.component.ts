import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Iroman';
  public age: number = 45;

  // los get en angular son igaules a las propiedades

  get capitalizado():string{
    return this.name.toUpperCase();
  }

  getDescriptionHero():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void {
    this.name = 'Spiderman'

    // cuando no hayamos implementado el metodo podemos usar el throw
    // con esto mandaremos un string y evitar que colapse la app
    // throw 'Metodo por implementar'
  }

  changeAge(){
    this.age = 25

  }

  reset():void {
    this.name = 'Ironman';
    this.age = 45;
  }

}
