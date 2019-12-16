<template>
  <div>
    <h1>
      <!-- {{ label }} -->
      <div>
        <input type="text" v-model="form.name" placeholder="Tambah TodoList" />
        <span>
          <!-- <button @click="addTodo">+</button> -->
        </span>
      </div>
      <ul>
        <li v-for="(todo, index) in todolistCookies" :key="index">
          <input type="text" v-model="todo.name" />
          <button @click="removeTodo(todo)">-</button>
        </li>
      </ul>
    </h1>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data: () => ({
    form: [
      {
        name: ""
      }
    ],
    todolist: [],
    todolistCookies: []
  }),
  mounted() {
    if (JSON.parse(Cookies.get("todo"))) {
      try {
        this.todolistCookies = JSON.parse(Cookies.get("todo"));
      } catch (e) {
        Cookies.remove("todo");
      }
    }
  },
  methods: {
    // addTodo() {
    //   this.todolist.push({
    //     name: this.form.name
    //   });
    //   this.form.name = "";
    //   Cookies.set("todo", JSON.stringify(this.todolist));
    //   this.todolistCookies = JSON.parse(Cookies.get("todo"));
    // },
    // removeTodo(id) {
    //   const index = this.todolistCookies.indexOf(id);
    //   this.todolistCookies.splice(index,1)
    //   Cookies.remove("todo");
    // },
    ...mapMutations(['removeTodo'])

  }
};
</script>