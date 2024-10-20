new ClipboardJS('p#serverIP');
var clipboard = new ClipboardJS('p#serverIP');
var getsnack = document.getElementById("snackbar");

clipboard.on('success', function(e) {
    getsnack.classList.add('show');
    setTimeout(function(){ getsnack.classList.remove('show'); }, 2500);
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

// Add a click event to open the desired link
document.querySelector('p#serverIP').addEventListener('click', function() {
    // Replace 'https://desired-link.com' with the actual link you want to open
    window.open('minecraft://?addExternalServer=DimensionalMC|DimensionalMC.aternos.me:36035', '_blank'); 
});
