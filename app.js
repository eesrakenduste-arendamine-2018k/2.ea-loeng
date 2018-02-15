(function(){
  "use strict"

  const PassGen = function () {
    // SINGLETON PATTERN algus (3 rida)
    if (PassGen.instance) {
      return PassGen.instance
    }
    PassGen.instance = this

    // rakenduse läheb tööle
    this.init()
  }

  // kõik põhifunktsioonid tulevad siia sisse ja 
  // saab kutsuda välja this.funktsiooniNimi()
  PassGen.prototype = {
    init: function(){
      console.log('rakendus käivitus');

    }
  }

  // lehe laadimisel käivitame
  window.onload = function(){
    const app = new PassGen()
    window.app = app // globalaalne muutuja
  }

})()
