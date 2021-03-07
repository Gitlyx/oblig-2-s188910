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
            $.post("/post", ticketList, () => postTicket());
            firstName.val("");
            lastName.val("");
            phoneNumber.val("");
            email.val("");
            quantity.val("");
        }

        $("#delete").click(() => {
            $.ajax({
                url: "/delete",
                type: "DELETE",
                success: postTicket()
            });
        });
    });
});

const postTicket = () => $.get("/get", tickets => formatTickets(tickets));

const inputVal = ticketList => {
    if (ticketList.firstName === "") {
        $("#firstNameError").html("Please enter a last name here.");
        return false;
    } else {
        $("#firstNameError").html("");
    }

    if (ticketList.lastName === "") {
        $("#lastNameError").html("Please enter a last name here.");
        return false;
    } else {
        $("#lastNameError").html("");
    }

    if (ticketList.phoneNumber === "") {
        $("#phoneNumberError").html("Please enter a phone nummber");
        return false;
    } else {
        $("#phoneNumberError").html("");
    }

    if (ticketList.email === "") {
        $("#emailError").html("Please enter a phone nummber");
        return false;
    } else {
        $("#emailError").html("");
    }

    if (ticketList.movie === "") {
        $("#movieError").html("Please select a movie");
        return false;
    } else {
        $("#movieError").html("");
    }

    if (ticketList.quantity === "") {
        $("#quantityError").html("Please select quantity.");
        return false;
    } else {
        $("#quantityNumberError").html("");
    }
    return true;
}
const formatTickets = (tickets) => {
    let output = "<table><tr>" +
        "<th>Name</th>" +
        "<th>Last name</th>" +
        "<th>Phone number</th>" +
        "<th>Email</th>" +
        "<th>Movie</th>" +
        "<th>Quantity</th>" +
        "</tr>";

    for (let ticket of tickets) {
        output += "<tr>" +
            "<td>" + ticket.firstName + "</td>" +
            "<td>" + ticket.lastName + "</td>" +
            "<td>" + ticket.phoneNumber + "</td>" +
            "<td>" + ticket.email + "</td>" +
            "<td>" + ticket.movie + "</td>" +
            "<td>" + ticket.quantity + "</td>" +
            "</tr>";
    }
    output += `</table>`;
    $("#tickets").html(output);
}