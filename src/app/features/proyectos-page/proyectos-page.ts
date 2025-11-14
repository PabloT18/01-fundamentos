import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ListadoProyectos } from './components/listado-proyectos/listado-proyectos';

@Component({
  selector: 'app-proyectos-page',
  imports: [],
  templateUrl: './proyectos-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosPage {
  name = signal('');
  description = signal('');
  proyectos = signal<Proyecto[]>([
    {
      id: 1, nombre: 'Proyecto A',
      descripcion: 'Descripción '
    },
  ])
  changeName(value: string) {
    this.name.set(value);
  }
  changeDescription(value: string) {
    this.description.set(value);
  }
  addProyecto() {
    const newProyecto: Proyecto = {
      id: this.proyectos().length + 1,
      nombre: this.name(),
      descripcion: this.description()
    };
    this.proyectos.set([...this.proyectos(), newProyecto]);
    this.name.set('');
    this.description.set('');
  }
}

