var po = new Vue({
  data: {
    a: 1
  },
  updated: function (){
    console.log('a is: ' + this.a)
  }
})
