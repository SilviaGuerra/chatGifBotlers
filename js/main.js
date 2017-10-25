(function(){
  var cargarPagina = function(){
    setTimeout(saludo, 800);
    setTimeout(hola, 3200);
    setTimeout(eligeText, 3230)
    setTimeout(eligeImpreso, 9050);
    setTimeout(vendermasText, 9100);
    setTimeout(vendermasImpreso, 10550);
    setTimeout(chocoPastelText, 11500)
    setTimeout(loquieroText, 12200);
    setTimeout(loquieroImpreso, 13300);
    setTimeout(agregadoText, 15200);
    setTimeout(agregadoImpreso, 17000);
    setTimeout(confirmaOrden, 18000);
    setTimeout(hacerDespues, 18500);
    setTimeout(pagarText, 19300);
    setTimeout(pagarImpreso, 20000);
    setTimeout(opciones, 20300);
  }

  var bubble = function(){
    var div = $("<div>", {"class": "mgui-bubble bubble"});
    var wrapp = $("<div>", {"class": "load-wrapp mgui-bubble-text"});
    var load = $("<div>", {"class": "load-3"});

    for (i=0; i<3; i++){
      var line1 = $("<div>", {"class": "line"});
      load.append(line1);
    }

    wrapp.append(load);
    div.append(wrapp);


    // console.log(div);
    // div.fadeOut(800);
    //div.fadeOut(300); //para el ultimo mensaje
    //div.fadeOut(800); //para agent


    // if(type == "customer"){
      $("#chatBoxCustomer").append(div);
    // }else{
    //   $("#chatBoxAgent").append(div);
    // }
  }

  //agrega texto a burbujas
  var escribir = function(text, type){
    var text =  text.split("");
    var div = $("<div>", {"class": "mgui-bubble-textbox"});

    $.each(text, function(i, letra){
      setTimeout(function(){
        div.append(letra);
      }, i * 100);
    });

    if(type == "customer"){
      $("#chatBoxCustomer").append(div);
    }else{
      $("#chatBoxAgent").append(div);
    }
  }

  var limpiar = function(){
    var div = $(".mgui-bubble.chatbox");
    div.empty();
  }

  //Crea burbujas con texto integrado y las imprime en chatbox
  //Esta funcion crea burbuja de lado derecho del lado del cliente
  var vistaCliente = function(texto){
    var section = $("<div>", {"class":"section"});
    var sectionBlock = $("<div>", {"class":"section-block"});
    var bubblegroup = $("<div>", {"class": "mgui-bubbleGroup is-our"});
    var groupElements = $("<div>", {"class": "mgui-bubbleGroup-elements"});
    var isTheir = $("<div>", {"class": "mgui-bubble is-our"});
    var bubbletext = $("<div>", {"class": "mgui-bubble-text"});

    bubbletext.text(texto);

    isTheir.append(bubbletext);
    groupElements.append(isTheir);
    bubblegroup.append(groupElements);
    sectionBlock.append(bubblegroup);
    section.append(sectionBlock);

    $("#chatCustomer").append(section);
  }

  //Esta funcion crea burbuja de lado izquierdo del lado de cliente
  var clienteBot = function(texto){
    var section = $("<div>", {"class":"section"});
    var sectionBlock = $("<div>", {"class":"section-block"});
    var bubblegroup = $("<div>", {"class": "mgui-bubbleGroup is-their agentView"});
    var groupElements = $("<div>", {"class": "mgui-bubbleGroup-elements"});
    var isTheir = $("<div>", {"class": "mgui-bubble is-their agentView"});
    var bubbletext = $("<div>", {"class": "mgui-bubble-text"});

    bubbletext.text(texto);

    isTheir.append(bubbletext);
    groupElements.append(isTheir);
    bubblegroup.append(groupElements);
    sectionBlock.append(bubblegroup);
    section.append(sectionBlock);

    $("#chatCustomer").append(section);
  }

  //Burbuja de lado izquierdo en la pantalla de botlers
  var vistaBot = function(texto){
    // create elements
    var section = $("<div>", {"class":"section"});
    var sectionBlock = $("<div>", {"class":"section-block"});
    var bubblegroup = $("<div>", {"class": "mgui-bubbleGroup is-their agentView"});
    var groupElements = $("<div>", {"class": "mgui-bubbleGroup-elements"});
    var isTheir = $("<div>", {"class": "mgui-bubble is-their agentView"});
    var bubbletext = $("<div>", {"class": "mgui-bubble-text"});

    bubbletext.text(texto);

    isTheir.append(bubbletext);
    groupElements.append(isTheir);
    bubblegroup.append(groupElements);
    sectionBlock.append(bubblegroup);
    section.append(sectionBlock);

    $("#chatAgent").append(section);
  }

  //Burbuja de lado derecho en pantalla de botlers
   var botEnCliente = function(texto){
    var section = $("<div>", {"class":"section"});
    var sectionBlock = $("<div>", {"class":"section-block"});
    var bubblegroup = $("<div>", {"class": "mgui-bubbleGroup is-our"});
    var groupElements = $("<div>", {"class": "mgui-bubbleGroup-elements"});
    var isTheir = $("<div>", {"class": "mgui-bubble is-our"});
    var bubbletext = $("<div>", {"class": "mgui-bubble-text"});

    bubbletext.text(texto);

    isTheir.append(bubbletext);
    groupElements.append(isTheir);
    bubblegroup.append(groupElements);
    sectionBlock.append(bubblegroup);
    section.append(sectionBlock);

    $("#chatAgent").append(section);
  }

  //crea seccion de imagenes (para seleccionar producto) con scroll en x
  var imagenOpciones = function(type){
    var divContenedor = $("<div>", {"class": "mgui-genericElementList"});

    for(i = 0; i < 3; i++){
      var divElement = $("<div>", {"class": "mgui-genericElement"});

      var divImg1 = $("<div>", {"class": "mgui-genericElement-image"});
      divImg1.attr("style", "background-image:url('img/product" + i + ".png') ");

      divElement.append(divImg1);

      var divText = $("<div>", {"class": "mgui-genericElement-text"});
      var titulo = $("<div>", {"class": "mgui-genericElement-title"});
      var subtitulo = $("<div>", {"class": "mgui-genericElement-subtitle"});
      var itemUrl = $("<div>", {"class": "mgui-genericElement-itemUrl"});

      var divBotones = $("<div>", {"class": "mgui-genericElement-buttons"});
      var divBoton2 = $("<div>", {"class": "mgui-button"});
      var divBoton1 = $("<div>", {"class": "mgui-button"});

      divBoton1.text("¡Lo quiero!");
      divBoton2.text("Muestrame más");
      divBotones.append(divBoton1);
      divBotones.append(divBoton2);

      divElement.append(divBotones);

      divText.append(itemUrl);
      divText.append(subtitulo);
      divText.append(titulo);
      divElement.append(divText);
      divContenedor.append(divElement);

      if(type == "customer"){
        $("#chatCustomer").append(divContenedor);
      }else{
        $("#chatAgent").append(divContenedor);
      }
    }
  }

  var deslizarseAbajo = function(type){
    var abajo = $('#chatCustomer').add('#chatAgent');
    var largo = abajo[0].scrollHeight;
    abajo.scrollTop(largo);
  }

  var confirmacionOrden = function(type){
    var divContenedor = $("<div>", {"class": "mgui-receipt"});

    var divHead = $("<div>", {"class": "mgui-receipt-head"});
    var pTienda = $("<p>", {"class": "tienda"});
    divHead.text("Confirmación de pedido");
    pTienda.text("Cupcakes");
    divHead.append(pTienda);
    divContenedor.append(divHead);

    var divBody = $("<div>", {"class": "mgui-body"});
    var divElement = $("<div>", {"class": "mgui-receiptElement"});
    var divImg1 = $("<div>", {"class": "mgui-receiptElement-image"});
    divImg1.attr("style", "background-image:url('img/product" + [0] +".png')");
    divElement.append(divImg1);
    divBody.append(divElement)

    var divElementDesc = $("<div>", {"class": "mgui-receiptElement-desc"});

    var title = $("<div>", {"class": "mgui-receiptElement-title"});
    title.text("Naked cake vainilla");
    divElementDesc.append(title);
    divElement.append(divElementDesc);
    divBody.append(divElement);
    var key = $("<div>", {"class": "mgui-receipt-key"});
    var value = $("<div>", {"class": "mgui-receipt-value"});
    key.text("Pagado con");
    value.text("Visa 2345");
    divBody.append(key);
    divBody.append(value);
    divContenedor.append(divBody);

    var foot = $("<div>", {"class": "mgui-receipt-foot"});
    var label = $("<div>", {"class": "mgui-receipt-foot-label"});
    var sum = $("<div>", {"class": "mgui-receipt-foot-sum"});
    sum.text("$166.14");
    label.text("Total");
    foot.append(sum);
    foot.append(label);
    divContenedor.append(foot);

    var chat = $('#chatCustomer').add('#chatAgent');
    chat.append(divContenedor)
  }

  var botonOpciones = function(){
    var divContenedor = $("<div>", {"class": "mgui-buttonsBubble"});

    var divText = $("<div>", {"class": "mgui-buttonsBubble-text"});
    divText.text("Tu total es de $166.14");
    divContenedor.append(divText);

    var divBotones = $("<div>", {"class": "mgui-buttonsBubble-buttons"});

    // for(i=0; i<2; i++){
      var divboton1 = $("<div>", {"class": "mgui-buttonsBubble-button"});
      var divboton2 = $("<div>", {"class": "mgui-buttonsBubble-button"});

      var divOpcion1 = $("<div>", {"class": "mgui-button"});
      var divOpcion2 = $("<div>", {"class": "mgui-button"});

      divOpcion1.text("Pagar $166.14");
      divOpcion2.text("Seguir comprando");

      divboton1.append(divOpcion1);
      divboton2.append(divOpcion2);

    // }

    divBotones.append(divboton1);
    divBotones.append(divboton2);

    divContenedor.append(divBotones);

    var chat = $('#chatCustomer').add('#chatAgent');
    chat.append(divContenedor);
  }

  // Inicia dialogo en chatbox
  var saludo = function(){
    escribir ("Hola, quiero un cupcake", "customer");
  };

  var hola = function(){
    bubble();
    vistaCliente("Hola, quiero un cupcake");
    vistaBot("Hola, quiero un cupcake");
  }

  var eligeText = function(){
    limpiar();
    escribir ("Puedes elegir de nutella, vainilla o cookies and cream");
  }

  var eligeImpreso = function(){
    botEnCliente("Puedes elegir de nutella, vainilla o cookies and cream");
    clienteBot("Puedes elegir de nutella, vainilla o cookies and cream");
  }

  var vendermasText = function(){
    limpiar();
    escribir("Qué más vendes?", "customer");
  }

  var vendermasImpreso = function(){
    vistaCliente("Qué más vendes?");
    vistaBot("Qué más vendes?");
  }

  var chocoPastelText = function(){
    imagenOpciones("customer");
    imagenOpciones();
  }

  var loquieroText = function(){
    limpiar();
    escribir("¡Lo quiero!", "customer");
  }

  var loquieroImpreso = function(){
    vistaCliente("¡Lo quiero!");
    vistaBot("¡Lo quiero!");
    limpiar();
    deslizarseAbajo();
  }

  var agregadoText = function(){
    escribir("¡Listo!, lo agregué a tu orden de compra");
  }

  var agregadoImpreso = function(){
    botEnCliente("¡Listo!, lo agregué a tu orden de compra");
    clienteBot("¡Listo!, lo agregué a tu orden de compra");
    limpiar();
    deslizarseAbajo();
  }

  var confirmaOrden = function(){
    confirmacionOrden();
    deslizarseAbajo();
  }

  var hacerDespues = function(){
    botEnCliente("¿Qué deseas hacer ahora?");
    clienteBot("¿Qué deseas hacer ahora?");
    limpiar();
    deslizarseAbajo();
  }

  var pagarText = function(){
    limpiar();
    escribir("Pagar", "customer");
  }

  var pagarImpreso = function(){
    vistaCliente("Pagar");
    vistaBot("Pagar");
    limpiar();
    deslizarseAbajo();
  }

  var opciones = function(){
    botonOpciones();
    deslizarseAbajo();
  }

  $(document).ready(cargarPagina);
})();
