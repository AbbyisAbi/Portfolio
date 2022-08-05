


  function compute(){ 
    let bloodVolume = document.getElementById("bloodVolume").value;
    let patientsWeight = document.getElementById("weight").value;
    let totalBV = (patientsWeight * bloodVolume) / 100;
    let hemoConc = document.getElementById("hemoConc").value;
    let increasedIntraVolume = (document.getElementById("salineAmount").value) * 0.25;
    let hemo = (hemoConc * totalBV);
    let newTIV = ((totalBV)/10 + increasedIntraVolume) * 10;
    let expectedPIH = (hemo/newTIV).toFixed(1);
    document.getElementById("answer").innerHTML = expectedPIH + " g/dL";
   
}


