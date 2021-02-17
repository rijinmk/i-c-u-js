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
  
    $('.inner-eye').css('transform', `translate(-${gamma}px, -${beta/4}px)`);
}