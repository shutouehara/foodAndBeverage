window.onload=function(){
    new Vue({
      el: '#app',
      data: {
        current_slide: 0,
        slides: [
          {img: './images/test1.webp'},
          {img: './images/test2.webp'},
          {img: './images/test3.webp'},
          {img: './images/test4.webp'}
        ],
      },
      mounted() {
        setInterval(() => {
          this.current_slide = this.current_slide < this.slides.length -1 ? this.current_slide +1 : 0
        }, 5000)
      }
    })
}