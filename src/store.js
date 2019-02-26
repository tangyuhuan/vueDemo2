import Vue from 'vue'
import Vuex from 'vuex'
// 调用Vuex
Vue.use(Vuex)
// 创建一个store
export default new Vuex.Store({
  state: {
    lists: []
  },
  mutations: {
    addItem (state, value) {
      state.lists.push(value)
    }
  },
  actions: {
  }
})

// 创建一个store
// export default new Vuex.Store({
//   // 定义组件的初始状态
//   state: {
//     count: 0,
//     todos: [
//       { id: 1, text: 'todo1', done: true },
//       { id: 2, text: 'todo2', done: false }
//     ]
//   },
//   getters: {
//     // Getter 接受 state 作为其第一个参数：
//     doneTodos: state => {
//       return state.todos.filter(todo => todo.done)
//     },
//     // Getter 也可以接受其他 getter 作为第二个参数：
//     doneTodosCount: (state, getters) => {
//       return getters.doneTodos.length
//     },
//     // 可以通过让 getter 返回一个函数，来实现给 getter 传参。在你对 store 里的数组进行查询时非常有用。
//     getTodoById: (state) => (id) => {
//       return state.todos.find(todo => todo.id === id)
//     }
//   },
//   // 定义改变组件状态的方法
//   mutations: {
//     increment (state, payload) {
//       state.count += payload.amount
//     },
//     incrementMap (state) {
//       state.count++
//     }
//   },
//   actions: {
//   }
// })
