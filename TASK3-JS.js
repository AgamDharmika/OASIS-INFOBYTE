function convertTemperature(){
    var inputTaker=document.getElementById("inputTaker").value;
    var input=document.getElementById("input").value;
    var ResultElement=document.getElementById("Result");

    var celsius,fahrenheit,kelvin;

    if(input === "celsius")
    {
      celsius=parseFloat(inputTaker);
      fahrenheit=celsiusToFahrenheit(celsius);
      kelvin=celsiusToKelvin(celsius);
    }
    else if (input === "fahrenheit")
    {
        fahrenheit=parseFloat(inputTaker);
        celsius=fahrenheitToCelsius(fahrenheit);
        kelvin=celsiusToKelvin(celsius);
    }
    else if (input === "kelvin")
    {
        kelvin=parseFloat(inputTaker);
        celsius=kelvinToCelsius(kelvin);
        fahrenheit=celsiusToFahrenheit(celsius);
    }

    ResultElement.innerHTML=
      "celsius:"+ celsius + "<br>" +
       "fahrenheit:" + fahrenheit + "<br>" + 
       "kelvin:" + kelvin;
    
}

function celsiusToFahrenheit(celsius){
    return (celsius * 9/5)+32;
}


function fahrenheitToCelsius(fahrenheit){
    return (fahrenheit-32)*5/9;
}

function celsiusToKelvin(celsius){
    return celsius+273.15;
}

function kelvinToCelsius(kelvin){
    return kelvin-273.15;
}
