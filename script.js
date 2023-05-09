$("document").ready(function () {
  $("input[type=radio][name='surowiec']").change(function () {
    let typsurowca = this.value;
    let typrangi;
    if ($("input[type=radio][name='typrangi']").is(":checked")) {
      typrangi = $("input[type=radio][name='typrangi']:checked").val();
    }
    let spawntime = 1;
    let typboosta = $("#boosttype").val();
    let iloscsurowcow;
    var procentarz;
    if (typrangi == null) {
      wynik.innerHTML = "Wybierz rangę!";
    } else {
      switch (typrangi) {
        case "GRACZ":
          procentarz = 0;
          break;
        case "VIP":
          procentarz = 0.15;
          break;
        case "SVIP":
          procentarz = 0.3;
          break;
        case "MVIP":
          procentarz = 0.5;
          break;
        case "LOVE":
          procentarz = 0.6;
      }
      switch (typsurowca) {
        case "diamond":
          spawntime = 1.25;
          break;
        case "warped":
          spawntime = 1.5;
          break;
        case "smoothsandstone":
          spawntime = 1.5;
          break;
        case "kelp":
          spawntime = 1.75;
          break;
        case "barrier":
          spawntime = 0;
          break;
      }
      if (spawntime == 0) {
        wynik.innerHTML = "Dany blok zostanie dodany w najbliższym czasie!";
        wynikutw.innerHTML = "";
      } else {
        switch (typboosta) {
          case "2x5min":
            // prettier-ignore
            iloscsurowcow = ((5 * (60/spawntime)) * 2) + ((5 * (60/spawntime) * procentarz) *2);
            wynik.innerHTML = iloscsurowcow.toFixed(0);
            wynikutw.innerHTML =
              "Utwardzone: " + (iloscsurowcow / 64).toFixed(1);
            break;
          case "2x15min":
            // prettier-ignore
            iloscsurowcow = ((15 * (60/spawntime)) * 2) + ((15 * (60/spawntime) * procentarz) *2);
            wynik.innerHTML = iloscsurowcow.toFixed(0);
            wynikutw.innerHTML =
              "Utwardzone: " + (iloscsurowcow / 64).toFixed(1);
            break;
          case "5x5min":
            // prettier-ignore
            iloscsurowcow = ((5 * (60/spawntime)) * 5) + ((5 * (60/spawntime) * procentarz) *2);
            wynik.innerHTML = iloscsurowcow.toFixed(0);
            wynikutw.innerHTML =
              "Utwardzone: " + (iloscsurowcow / 64).toFixed(1);
            break;
          case "5x15min":
            // prettier-ignore
            iloscsurowcow = ((15 * (60/spawntime)) * 5) + ((15 * (60/spawntime) * procentarz) *2);
            wynik.innerHTML = iloscsurowcow.toFixed(0);
            wynikutw.innerHTML =
              "Utwardzone: " + (iloscsurowcow / 64).toFixed(1);
            break;
          case "10x5min":
            // prettier-ignore
            iloscsurowcow = ((5 * (60/spawntime)) * 10) + ((5 * (60/spawntime) * procentarz) *2);
            wynik.innerHTML = iloscsurowcow.toFixed(0);
            wynikutw.innerHTML =
              "Utwardzone: " + (iloscsurowcow / 64).toFixed(1);
            break;

          case "10x10min":
            // prettier-ignore
            iloscsurowcow = ((10 * (60/spawntime)) * 10) + ((10 * (60/spawntime) * procentarz) *2);
            wynik.innerHTML = iloscsurowcow.toFixed(0);
            wynikutw.innerHTML =
              "Utwardzone: " + (iloscsurowcow / 64).toFixed(1);
            break;
          case "20x5min":
            // prettier-ignore
            iloscsurowcow = ((5 * (60/spawntime)) * 20) + ((5 * (60/spawntime) * procentarz) *2);
            wynik.innerHTML = iloscsurowcow.toFixed(0);
            wynikutw.innerHTML =
              "Utwardzone: " + (iloscsurowcow / 64).toFixed(1);
            break;
          case "30x5min":
            // prettier-ignore
            iloscsurowcow = ((5 * (60/spawntime)) * 30) + ((5 * (60/spawntime) * procentarz) *2);
            wynik.innerHTML = iloscsurowcow.toFixed(0);
            wynikutw.innerHTML =
              "Utwardzone: " + (iloscsurowcow / 64).toFixed(1);
            break;
        }
      }
    }
  });
});
