import Cookies from "js-cookie";

export default {
  state: {
    todolist: [],
    todolistCookies: [],
    form: [
      {
        name: ""
      }
    ]
  },
  mutations: {
    addTodo(state, value) {
      console.log("asup vuex euy");
      state.todolist.push({
        name: state.form.name
      });
      state.form.name = '';
      Cookies.set("todo", JSON.stringify(state.todolist));
      state.todolistCookies = JSON.parse(Cookies.get("todo"));
    },
    removeTodo(state, value) {
        console.log("asup removeTodo euy , alus pisan")
      const index = state.todolistCookies.indexOf(value);
      state.todolistCookies.splice(index,1)
      Cookies.remove("todo");
    },
  },
  actions: {
      
  },
};
