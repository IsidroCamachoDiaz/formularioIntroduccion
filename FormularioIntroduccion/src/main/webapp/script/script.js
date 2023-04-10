function guardar(){
    let mensaje = Number(document.getElementsByName('menEje')[0].value)*30/100;
    document.write("El valor es: " + mensaje);
    console.log(mensaje);
}