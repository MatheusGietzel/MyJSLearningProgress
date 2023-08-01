const metro = prompt("Insira um valor em metros")
const conversao = prompt("Insira a conversão desejada: \nMilimetro(mm) \nCentimetro(cm) \nDecimetro(dc) \nDecametro(dcm) \nHectometro(htm) \nQuilometro(km)")

switch (conversao) {
    case "mm":
       resultado = metro * 1000;
       alert(resultado + " milimetros");
       break;
    case "cm":
        resultado = metro * 100;
        alert(resultado + " centimetros");
        break;
    case "dc":
        resultado = metro * 10;
        alert(resultado + " decimetros");
        break;
    case "dcm":
        resultado = metro / 10;
        alert(resultado + " decâmetros");
        break;
    case "htm":
        resultado = metro / 100;
        alert(resultado + " hectômetros");
        break;
    case "km":
        resultado = metro / 1000;
        alert(resultado + " quilometros");
        break;
    default:        
    ("Opção não existente")
}