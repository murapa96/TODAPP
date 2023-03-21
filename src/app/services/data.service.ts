import { Injectable } from '@angular/core';

export interface TODO {
  id: number;
  title: string;
  completed: boolean;
  message: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: TODO[] = [
    {
      title: 'HOLA TWITCH',
      message: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      completed: false
    },
  ];

  public lastId = 0;

  constructor() { }

  public getMessages(): TODO[] {
    return this.messages;
  }

  public getMessageById(id: number): TODO {
    return this.messages[id];
  }

  public addTodo(todoTitle: string) {
    var todo = {
      title: todoTitle,
      message: '',
      date: new Date().toLocaleTimeString(),
      id: ++this.lastId,
      completed: false
    }
    this.messages.push(todo);
  }

  public removeTodo(todoId:number){
    this.messages = this.messages.filter(todo => todo.id !== todoId)
  }
}
