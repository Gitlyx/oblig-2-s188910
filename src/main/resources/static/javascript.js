$(() => {
    $("#regTicket").click(() => {
        const firstName = $("#firstName");
        const lastName = $("#lastName");
        const phoneNumber = $("#phoneNumber");
        const email = $("#email");
        const movie = $("#movie");
        const quantity = $("#quantity");

        const ticketList = {
            firstName: firstName.val(),
            lastName: lastName.val(),
            phoneNumber: phoneNumber.val(),
            email: email.val(),
            movie: movie.val(),
            quantity: quantity.val()
        };

        if (inputVal(ticketList)) {
            $.post("/store", ticketList, () => retrieve());
            firstName.val("");
            lastName.val("");
            phoneNumber.val("");
            email.val("");
            movie.val("");
            quantity.val("");

            console.log("Successful")
        } else {
            console.log("Unsucessful")
        }

        $("#delete").click(() => {
            $.ajax({
                url: "/delete",
                type: "DELETE",
                success: retrieve()
            })
        });
    });
});

const retrieve = () => $.get("/store", tickets => format(tickets));

const inputVal = ticketList => {
    console.log("Validation:");
    if (ticketList.firstName === "") {
        console.log("noname")
        return false;
    } else if (ticketList.lastName === "") {
        console.log("nolastname")
        return false;
    } else if (ticketList.phoneNumber === "") {
        console.log("nophonenumber")
        return false;
    } else if (ticketList.email === "") {
        console.log("noemail");
        return false;
    } else {
        return true;
    }


}

const format = tickets => {
    let output = `<table><tr>
        <td>Name</td>
        <td>Surname</td>
        <td>Phone number</td>
        <td>Email</td>
        <td>Movie</td>
        <td>Quantity</td>
        </tr>`;

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
    output += `</table>`;
    $("tickets").html(output);
}
