Vue.filter('currency', (valor) => {
  return `${valor} €`;
});

new Vue({
  el: 'main',
  data: {
    hola: 'hola mundo',
    user: 'Jesús',
    surname: 'Moyano',
    elements: ['uno', 'dos'],
    objects: {'uno': 'dos'},
    price: 20,
  },
  methods: {
    click(user) {
      console.log('click', user);
    },
    userCompleted2() {
      // los métodos se ejecutan siempre que cambia algo
      console.log('userCompleted2');
      return `${this.user} ${this.surname}`;
    }
  },
  computed: {
    userCompleted() {
      // computed se cachea y solo se ejecuta cuando cambie
      // algo que afecte a su resultado
      // en este caso si cambia user o surname, no price
      console.log('userCompleted');
      const user = this.user;
      return `${user} ${this.surname}`;
    }
  }
});