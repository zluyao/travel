<template>
    <ul class="tree-menu">
        <li class="tree-li"  v-for="(item, index) in treelist" :key="index">
            <div class="my-border border-bottom">
                <i class="tree-icon"></i>
                <div>{{item.title}}</div>
            </div>
            <treemenu class="children" :treelist="item.children" :parent="item"
                      v-show="treelist[index].children">
            </treemenu>
        </li>
    </ul>
</template>

<script>
  export default {
    name: 'treemenu',
    data () {
      return {
        parentList: [],
      };
    },
    props: ['treelist', 'parent'],
    created() {
    },
    mounted() {
      console.log(this.treelist);
    },
  };
</script>

<style scoped>
    .tree-li{
        font-size: 16px;
    }
    .my-border{
        display: flex;
        padding: 14px 10px;
    }
    .children{
        padding-left: 8px;
    }
    .tree-icon{
        width: 18px;
        height: 18px;
        background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -22.5px no-repeat;
        background-size: 20px 150px;
        margin-right: 5px;
    }
</style>
