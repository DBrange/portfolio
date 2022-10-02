const $fecha = document.getElementById('fecha'),
      $horario = document.getElementById('horario'),
      $horas = document.getElementById('horas'),
      $minutos = document.getElementById('minutos'),
      $segundos = document.getElementById('segundos');

setInterval(() => {
    const datos = new Date();

    let diaSemana = datos.getDay(),
        dia = datos.getDate(),
        mes = datos.getMonth(),
        año = datos.getFullYear(),
        horas = datos.getHours(),
        minutos = datos.getMinutes(),
        segundos = datos.getSeconds(); 

    let diaSemanaArray = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let mesArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Nobiembre", "Diciembre"]

    $fecha.textContent = `${diaSemanaArray[diaSemana]} ${dia} de ${mesArray[mes]} del ${año}`
    
    $horario.textContent = `${(horas + "").padStart(2, 0)}:${(minutos + "").padStart(2, 0)}:${(segundos + "").padStart(2, 0)}`;

    let gradosSegundos = 180 + segundos * 6;
    $segundos.style.transform = `translateX(-50%) rotate(${gradosSegundos}deg)`;

    let gradosMinutos = 180 + minutos * 6;
    $minutos.style.transform = `translateX(-50%) rotate(${gradosMinutos}deg)`;

    if(horas >= 12){
       horas = horas - 12; 
    }
    let gradosHoras = 180 + horas * 30;
    $horas.style.transform = `translateX(-50%) rotate(${gradosHoras}deg)`;

}, 1000);
