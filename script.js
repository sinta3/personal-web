let button = document.getElementById("button");
let el = document.getElementById("el");

button.addEventListener("click", send);

async function send() {
    try {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;

        let sendEmail = {
            name,
            email,
            subject,
            message,
        };

        let url = `https://5ef168c41faf160016b4d5af.mockapi.io/api/email`;
        let option = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(sendEmail),
        };

        let response = await fetch(url, option);
        let result = await response.json();
        console.log(result);
        document.body.style = "animation: pulse 5s infinite;";
    } catch (error) {
        console.log(error);
    }
}
