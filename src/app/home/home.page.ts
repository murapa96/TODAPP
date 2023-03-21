import { Component } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { DataService, TODO } from '../services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService) {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): TODO[] {
    return this.data.getMessages();
  }

  addTodo() {
    console.log('ADDTODO!!');
    Swal.fire({
      title: 'Add Todo',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Añadir',
      showLoaderOnConfirm: true,
      heightAuto: false,
    }).then((result) => {
      if (result.isConfirmed) {
        this.data.addTodo(result.value);
        Swal.fire({
          title: 'Añadido',
          text: 'Se ha añadido correctamente',
          icon: 'success',
          heightAuto: false,
        });
      }
    });
  }

  removeTodo(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, bórralo!',
      heightAuto: false,
    }).then((result) => {
      if (result.isConfirmed) {
        this.data.removeTodo(id);
        Swal.fire({
          title: 'Borrado!',
          text: 'Tu recordatorio ha sido borrado.',
          icon: 'success',
          heightAuto: false,
        });
      }
    });
  }
}
