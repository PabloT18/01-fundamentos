import { effect, Injectable, signal } from '@angular/core';
import { retry, single } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor() {

    effect(() => {
      const data = this.proyectos();
      console.log(data);
      console.log(JSON.stringify(data));
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    });
    effect(() => {
      const data = this.proyectosDOS();
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    });

  }

  private readonly STORAGE_KEY = 'proyectosApp';

  proyectos = signal<Proyecto[]>(this.loadProyectos());
  proyectosDOS = signal<Proyecto[]>(this.loadProyectos());



  private loadProyectos(): Proyecto[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [{
      id: 1, nombre: 'Proyecto A',
      descripcion: 'Descripción '
    },];
  }




  addProyecto(newProyecto: Proyecto) {
    this.proyectos.set([...this.proyectos(), newProyecto]);
  }

  dellProyecto(id: number) {
    this.proyectos.set(this.proyectos().filter(proyecto => proyecto.id !== id));
  }

  dellFirstProyecto() {
    this.proyectos.set(this.proyectos().slice(1));
  }
}
