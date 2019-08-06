//Declaración de variables
var nombreUsuario = "Cosme Fulanito";
var saldoCuenta = 5000;
var limiteExtraccion = 3000;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var codeSeguridad = 1620;
var saldoPrestamo = 0;

//Declaracion de funciones
function sumarDinero(valor) {
  var calculo = saldoCuenta + valor;
  return calculo;
}

function restarDinero(valor) {
  var calculo = saldoCuenta - valor;
  return calculo;
}

function sumarPrestamo(valor) {
  var calculo = saldoPrestamo + valor;
  return calculo;
}

function restarPrestamo(valor) {
  var calculo = saldoPrestamo - valor;
  return calculo;
}

function check(servicio) {
  if (saldoCuenta - servicio >= 0) {
    saldoAnterior = saldoCuenta;
    saldoCuenta = restarDinero(servicio);
    actualizarSaldoEnPantalla();
    alert(
      "Has pagado el servicio de" +
        servicio +
        "\nSaldo anterior: $" +
        saldoAnterior +
        "\nDinero descontado: $" +
        telefono +
        "\nSaldo actual: $" +
        saldoCuenta
    );
  } else {
    alert("No tienes dinero suficiente para realizar el pago del " + servicio);
  }
}

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
  iniciarSesion();
  cargarNombreEnPantalla();
  actualizarSaldoEnPantalla();
  actualizarLimiteEnPantalla();
};

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
  var limExtraccion = parseInt(
    prompt("Por favor, ingresa el nuevo limite de extraccion")
  );
  if (!isNaN(limExtraccion)) {
    limiteExtraccion = limExtraccion;
    actualizarLimiteEnPantalla();
    alert("Tu nuevo limite de extraccion es: $" + limiteExtraccion);
  } else {
    alert("Por favor, ingrese un valor valido");
  }
}

function extraerDinero() {
  var extraccion = parseInt(
    prompt(
      "Por favor, ingrese la cantidad de dinero que quiere extraner de su cuenta"
    )
  );
  function calculo(valor) {
    var test = valor % 100;
    return test;
  }
  if (
    extraccion <= saldoCuenta &&
    extraccion <= limiteExtraccion &&
    calculo(extraccion) == 0
  ) {
    saldoAnterior = saldoCuenta;
    saldoCuenta = restarDinero(extraccion);
    actualizarSaldoEnPantalla();
    alert(
      "Has extraido: $" +
        extraccion +
        "\nSaldo Anterior: $" +
        saldoAnterior +
        "\nSaldo Actual: $" +
        saldoCuenta
    );
  } else if (extraccion > saldoCuenta) {
    alert(
      "La cantidad de dinero que deseas extraer es mayor a tu saldo en la cuenta"
    );
  } else if (extraccion > limiteExtraccion) {
    alert(
      "La cantidad de dinero que deseas extraer es mayor a tu limite de extraccion"
    );
  } else if (calculo(extraccion > 0)) {
    alert("Solo puedes extraer billetes de 100");
  }
}

function depositarDinero() {
  var deposito = parseInt(
    prompt("Por favor, ingrese la cantidad de dinero que se quiere depositar")
  );
  if (!isNaN(deposito)) {
    saldoAnterior = saldoCuenta;
    saldoCuenta = sumarDinero(deposito);
    actualizarSaldoEnPantalla();
    alert(
      "Has depositado: $" +
        deposito +
        "\nSaldo Anterior: $" +
        saldoAnterior +
        "\nSaldo Actual: $" +
        saldoCuenta
    );
  } else {
    alert("Por favor, ingresar un valor valido");
  }
}

function pagarServicio() {
  var opcion = parseInt(
    prompt(
      "Por favor, ingrese el numero del servicio que desea pagar\n1-Agua\n2-Telefono\n3-Luz\n4-Internet"
    )
  );
  switch (opcion) {
    case 1:
      //pagar agua=350
      check(agua);
      break;
    case 2:
      //pagar telefono=425
      check(telefono);
      break;
    case 3:
      //pagar luz=210
      check(luz);
      break;
    case 4:
      // pagar internet=570
      check(internet);
  }
}

function transferirDinero() {
  var tranferencia = parseInt(
    prompt("Por favor, ingrese el valor a tranferir")
  );
  if (saldoCuenta - tranferencia >= 0) {
    cuentaTrans = prompt(
      "Por favor, ingrese el numero de cuenta al que desea tranferir"
    );
    if (cuentaTrans == cuentaAmiga1 || cuentaTrans == cuentaAmiga2) {
      saldoCuenta = restarDinero(tranferencia);
      actualizarSaldoEnPantalla();
      alert(
        "Se ha transferido: $" +
          tranferencia +
          "\nCuenta destino:" +
          cuentaTrans
      );
    } else {
      alert(
        "Solo puede realizar una transferencia de dinero a una cuenta amiga"
      );
    }
  } else {
    alert(
      "No posee saldo suficiente en la cuenta para realizar la transaccion"
    );
  }
}

function solicitarPrestamo() {
  var prestamo = parseInt(
    prompt("Por favor, ingrese el valor del prestamos a solicitar")
  );
  saldoAnterior = saldoCuenta;
  saldoCuenta = sumarDinero(prestamo);
  actualizarSaldoEnPantalla();
  saldoPrestamo = sumarPrestamo(prestamo);
  actualizarPrestamoEnPantalla();
  alert(
    "Su prestamo es de: $" +
      prestamo +
      "\nSaldo Anterior: $" +
      saldoAnterior +
      "\nSaldo Actual: $" +
      saldoCuenta
  );
}

function iniciarSesion() {
  var sesion = prompt(
    "Por favor, ingrese el codigo de seguridad para iniciar sesion"
  );
  var sesion_2 = parseInt(sesion);
  if (sesion_2 === codeSeguridad) {
    alert(
      "Bienvenido/a " +
        nombreUsuario +
        " ya puedes empezar a realizar operaciones"
    );
  } else {
    alert("El codigo de seguridad es incorrecto");
    saldoCuenta = 0;
    actualizarSaldoEnPantalla();
  }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
  document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
  document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
  document.getElementById("limite-extraccion").innerHTML =
    "Tu límite de extracción es: $" + limiteExtraccion;
}

function actualizarPrestamoEnPantalla() {
  document.getElementById("deuda-prestamo").innerHTML =
    "Tu deuda del prestamo es: $" + saldoPrestamo;
}
