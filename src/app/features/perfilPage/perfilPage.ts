import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-perfil-page',
  imports: [UpperCasePipe],
  templateUrl: './perfilPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilPage {

  name = signal("Pablo")
  lastName = signal("Torres")
  age = signal("20")


  getFullName() {
    return this.name() + " " + this.lastName();
  }


  cambiarEdad() {
    this.age.set("21");
  }

  cambiarDatos() {
    this.name.set("Juan");
    this.lastName.set("Perez");
    this.age.set("30");
  }


  resetDatos() {
    this.name.set("Pablo");
    this.lastName.set("Torres");
    this.age.set("20");
  }

}
