<template>
    <div class="test">
        测试
    </div>
</template>

<script>
  export default {
    name: 'test',
    data () {
      return {
        tree: null,
        arr: [{
          id: 1,
          name: 'B',
          parentId: 0,
        }, {
          id: 2,
          name: 'B-1',
          parentId: 1,
        }, {
          id: 3,
          name: 'A-1',
          parentId: 9,
        }, {
          id: 4,
          name: 'C-1',
          parentId: 6,
        }, {
          id: 5,
          name: 'C-1-2',
          parentId: 4,
        }, {
          id: 6,
          name: 'C',
          parentId: 0,
        }, {
          id: 7,
          name: 'B-2',
          parentId: 1,
        }, {
          id: 8,
          name: 'B-1-1',
          parentId: 2,
        }, {
          id: 9,
          name: 'A',
          parentId: 0,
        }],
      };
    },
    created() {
      let arr = this.getJsonTree(this.arr);
      let arrNew = this.traverseTree(arr);
      console.log(arr);
      console.log(arrNew);
      this.tree = arr;
    },
    methods: {
      getJsonTree: function (data, parentId = 0) {
        let itemArr = [];
        for (let i = 0; i < data.length; i++) {
          let node = data[i];
          if (node.parentId === parentId) {
            let newNode = {};
            newNode.id = node.id;
            newNode.name = node.name;
            newNode.parentId = node.parentId;
            newNode.children = this.getJsonTree(data, node.id);
            itemArr.push(newNode);
          }
        }
        return itemArr;
      },
      traverseTree: function (tree) {
        let arr = [];
        for (let i = 0; i < tree.length; i++) {
          arr.push({ 'name': tree[i].name });
          if (tree[i].children.length !== 0) {
            arr = arr.concat(this.traverseTree(tree[i].children));
          }
        }
        return arr;
      }
    },
  };
</script>

<style scoped>
</style>
