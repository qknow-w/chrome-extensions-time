 var show = document.getElementById('show')
 show.innerHTML = getNowFormatDate()

 setInterval(function () {
   show.innerHTML = getNowFormatDate()
 }, 1000)

 function getNowFormatDate () {
   console.log('new Date()', new Date())
   return window.moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
 }
