


/**
 * EVENT MODAL BOOTSTRAP
 */
const modalCotizar = document.getElementById('modal-cotizar');
modalCotizar.addEventListener('hidden.bs.modal', event => {
    cleanForm();
    console.log("hidden");
});
modalCotizar.addEventListener('show.bs.modal', event => {
    cleanForm();
    console.log("show");
});




/**
 * CLEAN FORM COTIZAR
 */
function cleanForm() {
    document.getElementById("form_name").value = "";
    document.getElementById("form_email").value = "";
    document.getElementById("form_message").value = "";
}


/**
 * SUBMIT COTIZAR
 */
function submitCotizar() {
    let name = document.getElementById("form_name").value;
    alert(name + " pronto te contactaremos!!");

    cleanForm();

    return false;
}



/**
 * SUBMIT EMAIL WEB
 */
function submitEmailWeb() {
    let name = document.getElementById("form_jumbotron_web").value;
    alert(name + " pronto te contactaremos!!");
    document.getElementById("form_jumbotron_web").value = "";

    return false;
}
/**
 * SUBMIT EMAIL FOR SYSTEM
 */
function submitEmailSystem() {
    let name = document.getElementById("form_jumbotron_system").value;
    alert(name + " pronto te contactaremos!!");
    document.getElementById("form_jumbotron_system").value = "";

    return false;
}
/**
 * SUBMIT EMAIL FOR APP
 */
function submitEmailApp() {
    let name = document.getElementById("form_jumbotron_app").value;
    alert(name + " pronto te contactaremos!!");
    document.getElementById("form_jumbotron_app").value = "";

    return false;
}