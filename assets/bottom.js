var app = new Vue({
    el: '#b-menu',
    data: {
        ActiveBtn: false
    }
})

Vue.component('fade-in', {
  template: `
	<div>
  	<transition name="fade">
  		<slot v-if="visible"></slot>
    </transition>
  </div>`,
  data() {
    return {
      visible: false
    };
  },
  methods: {
    handleScroll() {
      if (!this.visible) {
        var top = this.$el.getBoundingClientRect().top;
        this.visible = top < window.innerHeight + 100;
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
})

new Vue({
  el: '#fade',
  data: {
    message: 'Hello Vue.js!'
  }
})