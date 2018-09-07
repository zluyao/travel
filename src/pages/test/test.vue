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
      console.log(this.arr);
      // let arr = this.arr; // 分析与下面一行代码区别
      let arr = this.arr.slice(0); // 设置数组副本
      for (let i = 0; i < arr.length; i++) {
        let k = i;
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[k].parentId >= arr[j].parentId) {
            k = j;
          }
        }
        if (k !== i) {
          let tmp = arr[i];
          arr[i] = arr[k];
          arr[k] = tmp;
        }
      }
      console.log(this.arr);
      for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].name + '  ' + arr[i].parentId);
      }
    },
  };
</script>

<style scoped>
</style>
