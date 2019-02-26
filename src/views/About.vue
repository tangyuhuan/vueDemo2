<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>count is: {{msg}}</div>
  </div>
</template>
<script>
// 引入store文件
import store from '@/store'
export default {
  name: 'about',
  store,
  data () {
    return {
      // 通过store.state获取状态对象
      msg: store.state.count
    }
  }
}
</script>
