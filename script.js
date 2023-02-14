$("document").ready(function () {
  $("input[type=radio][name='typrangi']").change(function () {
    let typrangi = this.value;
    let typboosta = $("#boosttype").val();
    let iloscsurowcow;
    console.log(typrangi);
    var procentarz;
    switch (typrangi) {
      case "GRACZ":
        procentarz = 1;
        break;
      case "VIP":
        procentarz = 1.15;
        break;
      case "SVIP":
        procentarz = 1.3;
        break;
      case "MVIP":
        procentarz = 1.5;
        break;
    }
    switch (typboosta) {
      case "2x5min":
        // prettier-ignore
        iloscsurowcow = ((5 * 60) * 2) * procentarz;
        wynik.innerHTML = iloscsurowcow.toFixed(0);
        wynikutw.innerHTML = "Utwardzone: " + (iloscsurowcow / 64).toFixed(1);
        break;
      case "2x15min":
        // prettier-ignore
        iloscsurowcow = ((15 * 60) * 2) * procentarz;
        wynik.innerHTML = iloscsurowcow.toFixed(0);
        wynikutw.innerHTML = "Utwardzone: " + (iloscsurowcow / 64).toFixed(1);
        break;
      case "5x5min":
        // prettier-ignore
        iloscsurowcow = ((5 * 60) * 5) * procentarz;
        wynik.innerHTML = iloscsurowcow.toFixed(0);
        wynikutw.innerHTML = "Utwardzone: " + (iloscsurowcow / 64).toFixed(1);
        break;
      case "5x15min":
        // prettier-ignore
        iloscsurowcow = ((15 * 60) * 5) * procentarz;
        wynik.innerHTML = iloscsurowcow.toFixed(0);
        wynikutw.innerHTML = "Utwardzone: " + (iloscsurowcow / 64).toFixed(1);
        // prettier-ignore
        iloscsurowcow = ((5 * 60) * 10) * procentarz;
        wynik.innerHTML = iloscsurowcow.toFixed(0);
        wynikutw.innerHTML = "Utwardzone: " + (iloscsurowcow / 64).toFixed(1);
        break;
      case "10x10min":
        // prettier-ignore
        iloscsurowcow = ((10 * 60) * 10) * procentarz;
        wynik.innerHTML = iloscsurowcow.toFixed(0);
        wynikutw.innerHTML = "Utwardzone: " + (iloscsurowcow / 64).toFixed(1);
        break;
      case "20x5min":
        // prettier-ignore
        iloscsurowcow = ((5 * 60) * 20) * procentarz;
        wynik.innerHTML = iloscsurowcow.toFixed(0);
        wynikutw.innerHTML = "Utwardzone: " + (iloscsurowcow / 64).toFixed(1);
        break;
      case "20x10min":
        // prettier-ignore
        iloscsurowcow = ((10 * 60) * 20) * procentarz;
        wynik.innerHTML = iloscsurowcow.toFixed(0);
        wynikutw.innerHTML = "Utwardzone: " + (iloscsurowcow / 64).toFixed(1);
        break;
      case "30x5min":
        // prettier-ignore
        iloscsurowcow = ((5 * 60) * 30) * procentarz;
        wynik.innerHTML = iloscsurowcow.toFixed(0);
        wynikutw.innerHTML = "Utwardzone: " + (iloscsurowcow / 64).toFixed(1);
        break;
      case "30x10min":
        // prettier-ignore
        iloscsurowcow = ((10 * 60) * 30) * procentarz;
        wynik.innerHTML = iloscsurowcow.toFixed(0);
        wynikutw.innerHTML = "Utwardzone: " + (iloscsurowcow / 64).toFixed(1);
        break;
    }
  });
});
