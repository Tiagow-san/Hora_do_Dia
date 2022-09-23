function load() {
    var elementMsg = document.getElementById("msg")
    var img = document.getElementById("image")
    var elementHour = document.getElementById("hour")
    var date = new Date()
    var hour = date.getHours()
    var minutes = date.getMinutes()
    elementMsg.innerHTML = (`Agora são ${hour} horas e ${minutes} minutos`)
    if (hour >= 6 && hour < 12) {
        elementHour.innerHTML = (`Bom dia!`)
        img.src = "./assets/morning.png"
        document.body.style.background = "#f6d0ad"
    }
    else if (hour >= 12 && hour < 18) {
        elementHour.innerHTML = (`Boa tarde!`)
        img.src = "./assets/afternoon.png"
        document.body.style.background = "#b5d2ec"
    }
    else {
        elementHour.innerHTML = (`Boa noite!`)
        img.src = "./assets/night.png"
        document.body.style.background = "#347a97"
    }
}
