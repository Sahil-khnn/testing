const firebaseConfig = {
    apiKey: "AIzaSyDySXRLqKscsaIHpDG_S_HPurNvApRWrs8",
    authDomain: "contactform-cab.firebaseapp.com",
    databaseURL: "https://contactform-cab-default-rtdb.firebaseio.com",
    projectId: "contactform-cab",
    storageBucket: "contactform-cab.appspot.com",
    messagingSenderId: "169403391379",
    appId: "1:169403391379:web:cb54a9eea833fcee70dc66"
};

// ------- firebase initialize 
firebase.initializeApp(firebaseConfig);

// ------- refercence your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var namee = getElementVal("namee");
    var phonee = getElementVal("phonee");
    var emailid = getElementVal("emailid");

    saveMessages(namee, phonee, emailid);

    // enable alert
    document.querySelector(".alert").style.display = "block";

    // remove alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    // remove the form
    document.getElementById("contactForm").reset();

}

const saveMessages = (namee, phonee, emailid) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        a_Name: namee,
        b_Phone: phonee,
        c_Emailid: emailid,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}