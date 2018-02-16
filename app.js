(function(){
  "use strict"

  const PassGen = function () {
    // SINGLETON PATTERN algus (3 rida)
    if (PassGen.instance) {
      return PassGen.instance
    }
    PassGen.instance = this

    this.passwords = []
    this.container = null

    // rakenduse läheb tööle
    this.init()
    console.log(this)
  }

  // kõik põhifunktsioonid tulevad siia sisse ja 
  // saab kutsuda välja this.funktsiooniNimi()
  PassGen.prototype = {
    init: function () {
      console.log('rakendus käivitus')

      this.container = document.querySelector('#container')

      document
        .querySelector('#generate')
        .addEventListener('click', this.generatePasswords.bind(this))
        // bind(this) selleks, et generatePasswords säiliks this viide
    },
    generatePasswords: function () {
      console.log('vajutas nuppu')
      console.log(this)
      const passLength = document.querySelector('#pass-length').value

      const passwordsCount = 10

      this.passwords = []

      for (let i = 0; i < passwordsCount; i++) {
        const password = getRandomPassword(passLength)

        this.passwords.push(password)
      }

      console.log(this.passwords)
      this.drawPasswords()
    },
    drawPasswords: function () {

      this.container.innerHTML = ''

      this.passwords.forEach(function (password) {
        const li = document.createElement('li')
        li.innerText = password

        app.container.appendChild(li)

        // this.container.innerHTML += '<li>' + password + '</li>'

      })
    }
  }

  function getRandomPassword (len) {
    
    let wordsArray

    if (len === '16') {
       wordsArray = words.twelve  
    } else {
      // len === 8
      wordsArray = words.six  
    }

    let password = wordsArray[Math.round((wordsArray.length-1) * Math.random())]

    // if (len === '16') { password + 1234 } else { password + 12 }
    // Math.round(Math.random() * 10).toString()
    password = len === '16' 
      ? password + Math.round(1000 + Math.random() * 8999) // 1000 - 9999
      : password + Math.round(10 + Math.random() * 89) // 10-99

    return password
  }

  // lehe laadimisel käivitame
  window.onload = function(){
    const app = new PassGen()
    window.app = app // globalaalne muutuja
  }

})()
