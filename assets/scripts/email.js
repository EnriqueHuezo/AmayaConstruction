const verifyField = (field) => {
    if (field != null && field != "") {
        return true;
    } else {
        return false;
    }
}

function sendEmail() {
    var params = {
        name: document.getElementById('name').value,
        lastname: document.getElementById('lastname').value,
        number: document.getElementById('number').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    if (verifyField(params.name) && verifyField(params.lastname) && verifyField(params.number) && verifyField(params.email) && verifyField(params.message)) {
        const serviceID = 'service_x1o2rpf';
        const templateID = 'template_1ao9ooo';

        emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById('name').value = "";
            document.getElementById('lastname').value = "";
            document.getElementById('number').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";
            Toastify({
                text: "Message sent successfully!",
                className: "info",
                position: "right",
                gravity: "bottom",
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
              }).showToast();
        })
        .catch((err) => {
            console.log(err);
        })
    } else {
        Toastify({
            text: "Complete all fields to send the message!",
            className: "info",
            position: "right",
            gravity: "bottom",
            style: {
              background: "linear-gradient(to right, #8B0001, #9E1711)",
            }
          }).showToast();
    }
}