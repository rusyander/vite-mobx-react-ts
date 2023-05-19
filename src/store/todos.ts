import axios from "axios";
import { makeAutoObservable } from "mobx";

class todos {
  todosList = [
    { id: 453345, title: "Купить хлеб", completed: false },
    { id: 22234, title: "Купить хлеб", completed: true },
    { id: 300656456450, title: "Купить хлеб", completed: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  //   allTodos() {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/todos?_limit=15")
  //       .then((response) => response.data)
  //       .then((value) => {
  //         this.todosList = [...this.todosList, ...value];
  //         // this.todosList = [...value];
  //       });
  //   }
  async allTodos() {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/todos?_limit=15")
    //   .then((response) => response.data)
    //   .then((value) => {
    //     this.todosList = [...this.todosList, ...value];
    //     // this.todosList = [...value];
    //   });

    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=15"
    );
    const data = await res.data;
    this.todosList = [...this.todosList, ...data];
  }

  delete(id: number) {
    console.log("delete", id);
    this.todosList = this.todosList.filter((todo: any) => todo.id !== id);
  }

  update(id: number) {
    console.log("updates", id);
    this.todosList = this.todosList.map((todo: any) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }
}

const todosMobx = new todos();

export default todosMobx;
