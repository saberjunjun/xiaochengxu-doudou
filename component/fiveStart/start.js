// component/fiveStart.js
Component({
  properties: {
    star: {
      type: Number,
      Value: 0
    }
  },
  data: {
    arr1: [],
    arr3: []
  },
  methods: {
    score() {
      let sum = this.star;
      console.log(sum);
      for (let i = 0; i < sum; i++) {
        this.data.arr1.push(i);
      }
      for (let i = 0; i < 5-sum; i++){
        this.data.arr3.push(i);
      }
      this.setData(this.data);
    }
  }
})