window.onload = function(){
    document.getElementById("btnAlterar").addEventListener("click", function() {
        var meuH1 = document.getElementsByTagName("h1");
        meuH1[0].innerHTML = "Meu novo título principal!!!!"
    })
}