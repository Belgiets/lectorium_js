function TamagotchiCat (name) {
  this.name = name

  let health = 0
  let mood = 0
  let hungry = 0

  this.init = function() {
    let buttons = document.getElementsByClassName('action')
    let cat = this

    Array.from(buttons).forEach(function (button) {
      button.addEventListener('click', function () {
        let action = this.getAttribute("data-action")
        let type = this.getAttribute("data-type")

        cat.userAction(action, type)
      })
    })

    setInterval(this.randomEvent, 5000)
  }

  this.userAction = function(action, type) {
    console.log(action)
    console.log(type)
  }

  this.randomEvent = function() {
    console.log('random event')
  }
}

let assTail = new TamagotchiCat('Mimi')
assTail.init()