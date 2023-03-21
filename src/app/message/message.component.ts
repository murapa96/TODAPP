import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TODO } from '../services/data.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input() todo?: TODO;
  @Output() remove = new EventEmitter<number>();

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  completeTodo(sliding: any){
    if(this.todo){
      this.todo.completed = true;
      sliding.close()
    }
  }

  removeTodo(){
    if(this.todo){
      this.remove.emit(this.todo.id)
    }
  }
}
