<template>
  <div>
    <h1>Todo App</h1>
    <span>
      <button @click="addTodo">+</button>
    </span>
    <Todo></Todo>

    <!-- <button @click="removeTodo">-</button> -->
  </div>
</template>

<script>
import Todo from "./components/Todo";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  components: {
    Todo
  },
  data: () => ({}),
  methods: {
    ...mapMutations(["addTodo"])
  }
};
</script>

