// CSS Helper
document.getElementsByTagName("html")[0].className = window.location.href.replace(/https?:\/\/[^\/]+\/Appliance\/(.*)\.[a-z]{3,4}.*/g,"$1").replace(/\//g," ");
