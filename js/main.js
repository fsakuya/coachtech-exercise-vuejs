const vm = new Vue({
  el: '#app',
  data: {
    message: '',
    isClicked1: false,
    isClicked2: false,
    isClicked3: false
  },
  methods: {
    clickHandler1() {
      this.message = 'コンテンツ1'
      this.isClicked1 = true
      this.isClicked2 = false
      this.isClicked3 = false
      
    },
    clickHandler2() {
      this.message = 'コンテンツ2'
      this.isClicked2 = true
      this.isClicked1 = false
      this.isClicked3 = false
    },
    clickHandler3() {
      this.message = 'コンテンツ3'
      this.isClicked3 = true
      this.isClicked1 = false
      this.isClicked2 = false
    }
  }
})
