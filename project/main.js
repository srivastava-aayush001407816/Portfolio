function scroll(){
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement:'.java-title',
        triggerHook: 0
    })
    .setPin('.java-title')
    .addTo(controller);

    const controller2 = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement:'.spring-title',
        triggerHook: 0
    })
    .setPin('.spring-title')
    .addTo(controller2);

    
}


function nav(){
    $(".menu-icon").on("click",function(){
        $("nav ul").toggleClass("showing");
    })
}

scroll();


