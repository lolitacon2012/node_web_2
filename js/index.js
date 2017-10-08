alert("UNDER DEVELOPMENT");

//initialize app vue
var app = new Vue({
  el: '#app',
  data: {
  	isNotOnTop: false,
    page_title : 'Liu Dake'
  }
})

//initialize variables
app.isNotOnTop = ($(document).scrollTop() >= 200);

//initialize events
$(document).scroll(function() {
  app.isNotOnTop = ($(document).scrollTop() >= 200);
});