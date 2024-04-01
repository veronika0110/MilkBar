document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var guests = document.getElementById("guests").value;

    alert("Thank you, " + name + "! Your table for " + guests + " guests on " + date + " at " + time + " has been booked. We'll send you a confirmation email shortly.");


});
