window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
    var absolute = event.absolute;
    var alpha    = event.alpha;
    var beta     = event.beta;
    var gamma    = event.gamma;

    document.getElementsByClassName('absolute')[0].innerHTML = absolute;
    document.getElementsByClassName('alpha')[0].innerHTML = alpha;
    document.getElementsByClassName('beta')[0].innerHTML = beta;
    document.getElementsByClassName('gamma')[0].innerHTML = gamma;
  
    $('.neo').css('box-shadow', `${23+beta}px ${23+gamma}px 46px #aaaaaa, -23px -23px 46px #ffffff`);
}