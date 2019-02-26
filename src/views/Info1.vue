<template>
  <div>
    <h1>This is an info page</h1>
    <button type="button" @click="increment({
        amount: 10
      })">add</button>
    <div>count is: {{msg}}</div>
    <div>count2 is: {{msgAlias}}</div>
    <div>count3 is: {{countPlusLocalState}}</div>
    <div>count5 is: {{msgComputed}}</div>
    <div>{{doneTodosGet}}</div>
    <div>{{doneTodosCount}}</div>
    <div>{{doneTodos}}</div>
    <div>{{getTodoByIdCount}}</div>
  </div>
</template>
<script>
// @ 是 /src 目录的别名
import store from '@/store'
import { mapState, mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  name: 'Info',
  // 组件中引用store
  store,
  mounted () {
    window.vue = this
  },
  data: function () {
    return {
      localData: '次数'
    }
  },
  // store 中的状态是响应式的，在计算属性中返回即实现对 store 中状态的调用
  computed: {
    msgComputed () {
      return this.$store.state.count
    },
    // 通过store.getters 对象的属性访问
    doneTodosGet () {
      return this.$store.getters.doneTodos
    },
    // 给 getter 传参
    // 注意，getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果
    getTodoByIdCount () {
      return this.$store.getters.getTodoById(2)
    },
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState({
      // 箭头函数可使代码更简练
      msg: state => state.count,
      // 传字符串参数 'count' 等同于 `state => state.count`
      msgAlias: 'count',
      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState (state) {
        return state.count + this.localData
      }
    }),
    // mapGetters 辅助函数
    // 将 store 中的 getter 映射到局部计算属性
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters(['doneTodos', 'doneTodosCount'])
  },
  // computed: mapState(['count']),
  methods: {
    add () {
      // 通过store.commit提交mutation修改状态，而非直接改变 store.state.count
      store.commit('increment', {
        amount: 10
      })
    },

    // `mapMutations` 也支持载荷
    ...mapMutations([
      'increment' // 将 `this.increment(amount)` 映射为 `this.$store.commit('increment', amount)`
    ]),
    ...mapMutations({
      addMap: 'increment' // 将 `this.addMap()` 映射为 `this.$store.commit('increment')`
    })
  }
}
</script>
