$(document).on("ready",inicio);
function inicio () {
    $("#personalizar").on("click",transicion);
}
function transicion()
{
    var cambioCSS =
    {
        margin: 0,
        overflow: "hidden",
        padding: 0,
        width: 0
    };
    var cambioPerson =
    {
        height: "auto",
        opacity: 1,
        width: "40%"
    };
    $("#historia").css(cambioCSS);
    $('#historia').delay(1000).hide(0);
    $("#personalizacion").css(cambioPerson);
    $("#color div").on("click", cambiarColor);
}

function cambiarColor(datos)
{
    var col = datos.currentTarget.id;
    $("#cochecito img").attr("src", "c"+col+".jpg");
}