Vue.component('open-modal', {
  template: `
    <div id="overlay" >
        <div id="content">
          <p><slot></slot></p>
          <button v-on:click="clickEvent">close</button>
        </div>
    </div>
    `,
  methods: {
    clickEvent: function () {
      this.$emit('from-child')
    }
  }
})


const vm = new Vue({
  el: '#app',
  data: {
    showContent: false
  },
  methods: {
    openModal: function () {
      this.showContent = true
    },
    closeModal: function () {
      this.showContent = false
    }
  }
})

