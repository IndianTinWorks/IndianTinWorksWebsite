function sendMail(){
    var params = {
        name: document.getElementById("meet-name").value,
        email:  document.getElementById("meet-email").value,
        servicetype: document.getElementById("meet-service").value,
        message: document.getElementById("meet-message").value
    }
    const serviceID = "service_pffbsxt";
    const templateID = "template_s2xj3v3";

emailjs.send(serviceID,templateID).then(
    res=>{
        document.getElementById("meet-name").value = "";
        document.getElementById("meet-email").value = "";
        document.getElementById("meet-service").value = "";
        document.getElementById("meet-message").value = "";

        console.log(res);
        alert("message sent successfully");
    }
).catch(err=>{console.log(err);});
}

