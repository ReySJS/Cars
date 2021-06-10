const listCars = [
    { id: 1, model: 'McLaren Senna GTR', year: 2021, maxspeed: "250 km/h", image: "images/mclarensennagtr.jpg", color: '#3A68BD' },
    { id: 2, model: 'McLaren Elva', year: 2019, maxspeed: "320 km/h", image: 'images/mclarenelva.jpg', color: '#828D9F' },
    { id: 3, model: 'McLaren 720S Spider', year: 2019, maxspeed: "341 km/h", image: 'images/mclaren720sspider.jpg', color: '#3386A3' },
    { id: 4, model: 'McLaren Artura', year: 2021, maxspeed: "330 km/h", image: 'images/mclarenartura.jpg', color: '#A2C042' },
    { id: 4, model: 'McLaren SpeedTail', year: 2020, maxspeed: "403 km/h", image: 'images/mclarenspeedtail.jpg', color: '#92726E' }
];

function showcars()  {
    for (let cont = 0; cont < listCars.length; cont++) {
        document.getElementById('formlistcar').innerHTML +=
        '<div><input type="radio" id="car' + [cont] + '" name="choosedcar" onclick="tradecar('+cont+')" />' +
        '<label for="car' + [cont] + '">' + listCars[cont].model + '</label></div >'
    }
}
showcars();

function tradecar(carId) {
    document.getElementById('carmodel').innerHTML = listCars[carId].model;
    document.getElementById('caryear').innerHTML = listCars[carId].year;
    document.getElementById('carmaxspeed').innerHTML = listCars[carId].maxspeed;
    document.getElementById('carfocusimage').src = listCars[carId].image;
    document.getElementById('carnamecaption').innerHTML = listCars[carId].model;
    
    let y = document.querySelectorAll(".carinfo");
    for (let cont = 0; cont < y.length; cont++) {
      y[cont].style.color = listCars[carId].color;
    }
}

   

// function adcionarCarro() {

// }