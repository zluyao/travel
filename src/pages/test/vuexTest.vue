<template>
    <div class="test">
        测试
        <p>{{city}}</p>
    </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'vuex',
    data () {
      return {
      };
    },
    computed: {
      ...mapState(['city'])
    },
    created() {
      console.log(mapState);
    },
    methods: {
    },
  };
</script>

<style scoped>
</style>
