const vm = new Vue({
  el: '#app',
  data: {
    keyword: '',
    lists:
      [
        {
          id: 1,
          name: '佐藤'
        },
        {
          id: 2,
          name: '山田'
        },
        {
          id: 3,
          name: '鈴木'
        },
        {
          id: 4,
          name: '田中'
        }
      ]
  },
  computed: {
    filterLists: function () {
      const lists = [];
      for (let i in this.lists) {
        let person = this.lists[i];
        if (person.name.indexOf(this.keyword) !== -1) {
          lists.push(person);
        }
      }
      return lists
    }

  }
})

