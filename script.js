/* =========================================
   FLORAL BOUTIQUE
   CONTACT PAGE JAVASCRIPT
========================================= */


/* =========================================
   CONFIGURATION
========================================= */

const CONTACT_DETAILS = {

    phone: "+918884160602",

    displayPhone: "+91 8884160602",

    email: "support@floralboutique.in",

    address:
        "2nd Floor, No.2nd, ARAKERE, Bengaluru, Bengaluru Urban, Karnataka, 560077"

};


/* =========================================
   CALL FUNCTION
========================================= */

function callBusiness() {

    window.location.href =
        "tel:" + CONTACT_DETAILS.phone;

}


/* =========================================
   EMAIL FUNCTION
========================================= */

function sendEmail() {

    window.location.href =
        "mailto:" +
        CONTACT_DETAILS.email;

}


/* =========================================
   GOOGLE MAPS FUNCTION
========================================= */

function openDirections() {

    const address =
        encodeURIComponent(
            CONTACT_DETAILS.address
        );

    const mapsURL =
        "https://www.google.com/maps/search/?api=1&query="
        + address;

    window.open(
        mapsURL,
        "_blank"
    );

}


/* =========================================
   CALL BUTTON
========================================= */

const callButton =
    document.getElementById("callButton");


if (callButton) {

    callButton.addEventListener(
        "click",
        callBusiness
    );

}


/* =========================================
   EMAIL BUTTON
========================================= */

const emailButton =
    document.getElementById("emailButton");


if (emailButton) {

    emailButton.addEventListener(
        "click",
        sendEmail
    );

}


/* =========================================
   DIRECTIONS BUTTON
========================================= */

const directionButton =
    document.getElementById("directionButton");


if (directionButton) {

    directionButton.addEventListener(
        "click",
        openDirections
    );

}


/* =========================================
   BOTTOM CTA CALL BUTTON
========================================= */

const ctaCallButton =
    document.getElementById("ctaCallButton");


if (ctaCallButton) {

    ctaCallButton.addEventListener(
        "click",
        callBusiness
    );

}


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================
   BUTTON CLICK FEEDBACK
========================================= */

document
    .querySelectorAll("button")
    .forEach(button => {

        button.addEventListener(
            "click",
            function () {

                this.style.transform =
                    "scale(0.98)";

                setTimeout(() => {

                    this.style.transform = "";

                }, 120);

            }
        );

    });