<template>
  <div>
    <h1>
      Todo App
      <div>
        <input type="text" v-model="form.name" placeholder="Tambah TodoList"/>
        <span>
          <button @click="addTodo">+</button>
        </span>
      </div>
      <ul>
        <li v-for="(todo, index) in todolist" :key="index">        
          <input type="text" v-model="todo.name" />
          <button @click="removeTodo()">-</button>
        </li>
      </ul>
    </h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: [
      {
        name: ""
      }
    ],
    todolist: []
  }),

  methods: {
    addTodo() {
      this.todolist.push({
        name: this.form.name
      });
      this.form.name = "";
      console.log(this.form.name);
    },
    removeTodo() {
        this.todolist.shift()
    }
  }
};
</script>

