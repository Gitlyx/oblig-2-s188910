$(() => {
    $("#regTicket").click(() => {
        const firstName = $(firstName);
        const lastName = $(lastName);
        const phoneNumber = $(phoneNumber);
        const email = $(email);
        const movie = $(movie);
        const quantity = $(quantity);

        const ticketArray = {
            firstName: firstName.val(),
            lastName: lastName.val(),
            phoneNumber: phoneNumber.val(),
            email: email.val(),
            movie: movie.val(),
            quantity: quantity.val()
        };

        if (inputValidation(ticketArray)) {
            $.post("/store", ticketArray, () => {
                retrieveData()
                firstName.val();
                lastName.val();
                phoneNumber.val();
                email.val();
                movie.val();
                quantity.val();
            });
        } else {
            console.log("Error message")
        }

        $("#delete").click(() => {
            $.ajax({
                url: "/delete",
                type: "DELETE",
                success: retrieveData()
            })
        });
    });
});

const retrieve = () => $.get("/retrieve", tickets => formatList(tickets));

const inputValidation = ticketArray => {
    if (ticketArray.firstName === "") return false;
    if (ticketArray.lastName === "") return false;
    if (ticketArray.phoneNumber === "") return false;
    if (ticketArray.email === "") return false;
    if (ticketArray.movie === "") return false;
    if (ticketArray.quantity === "") return false;
}

const formatList = tickets => {
    let output = `<table><tr>
        <td>Name</td>
        <td>Surname</td>
        <td>Phone number</td>
        <td>Email</td>
        <td>Movie</td>
        <td>Quantity</td>
        </tr></table>`;

    for (let ticket of tickets) {
        output += `<tr>
        <td>ticket.firstName</td>
        <td>ticket.lastName</td>
        <td>ticket.phoneNumber</td>
        <td>ticket.email</td>
        <td>ticket.movie</td>
        <td>ticket.quantity</td>
        </tr>`;
    }
    $("tickets").html.output;
}
