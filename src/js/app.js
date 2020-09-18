// Importamos scripts
import jQuery from "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.min.js";

// En webpack, la CSS se importa dentro del JS
import "bootstrap/dist/css/bootstrap.min.css";
import "open-iconic/font/css/open-iconic-bootstrap.scss";
import "../css/styles.scss";


var myCarousel = document.querySelector('#carouselBootstrap5')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000,
    wrap: true
})

jQuery(function () {
    jQuery('[data-toggle="popover"]').popover()
})

jQuery('#modalUno').on('shown.bs.modal', function (e) {
    jQuery('#btnModalUno').attr("disabled", true);
    jQuery('#btnModalUno').addClass("btn-primary");
    jQuery('#btnModalUno').removeClass("btn-outline-success");
});
jQuery('#modalUno').on('hidden.bs.modal', function (e) {
    jQuery('#btnModalUno').attr("disabled", false);
    jQuery('#btnModalUno').removeClass("btn-primary");
    jQuery('#btnModalUno').addClass("btn-outline-success");
});

jQuery('#modalDos').on('shown.bs.modal', function (e) {
    jQuery('#btnModalDos').attr("disabled", true);
    jQuery('#btnModalDos').addClass("btn-primary");
    jQuery('#btnModalDos').removeClass("btn-outline-success");
});
jQuery('#modalDos').on('hidden.bs.modal', function (e) {
    jQuery('#btnModalDos').attr("disabled", false);
    jQuery('#btnModalDos').removeClass("btn-primary");
    jQuery('#btnModalDos').addClass("btn-outline-success");
});

jQuery('#modalTres').on('shown.bs.modal', function (e) {
    jQuery('#btnModalTres').attr("disabled", true);
    jQuery('#btnModalTres').addClass("btn-primary");
    jQuery('#btnModalTres').removeClass("btn-outline-success");
});
jQuery('#modalTres').on('hidden.bs.modal', function (e) {
    jQuery('#btnModalTres').attr("disabled", false);
    jQuery('#btnModalTres').removeClass("btn-primary");
    jQuery('#btnModalTres').addClass("btn-outline-success");
});

jQuery('#modalCuatro').on('shown.bs.modal', function (e) {
    jQuery('#btnModalCuatro').attr("disabled", true);
    jQuery('#btnModalCuatro').addClass("btn-primary");
    jQuery('#btnModalCuatro').removeClass("btn-outline-success");
});
jQuery('#modalCuatro').on('hidden.bs.modal', function (e) {
    jQuery('#btnModalCuatro').attr("disabled", false);
    jQuery('#btnModalCuatro').removeClass("btn-primary");
    jQuery('#btnModalCuatro').addClass("btn-outline-success");
});