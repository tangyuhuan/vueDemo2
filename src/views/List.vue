<template>
    <div>
        <ul>
            <li v-for="(item,index) in lists" :key="index">{{item.title}}-{{item.content}}</li>
        </ul>
    </div>
</template>
<script>
import store from '@/store'
import { mapState } from 'vuex'
export default {
  name: 'List',
  store,
  computed: mapState(['lists'])
}
</script>
<style>
</style>
