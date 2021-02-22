let form = document.querySelector(".needs-validation");
let ticketArray = [];
ticketArray.push(`<tr><th >First name</th><th>Last name</th><th>Phone number</th><th>Email</th><th>Qty</th><th>Movie name</th></tr>`);

form.addEventListener("submit", function (event) {
    const movie = document.getElementById("movie").value;
    const quantityInput = document.getElementById("quantity").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;

    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    } else {
        ticketArray.push(
            `<tr>
             <td>${firstName}</td>
             <td>${lastName}</td>
             <td>${phoneNumber}</td>
             <td>${email}</td>
             <td>${quantityInput}</td>
             <td>${movie}</td>
             </tr>`
        );
        let result = ticketArray.join("");
        document.getElementById("purchaseID").innerHTML = result;
        console.log(result);
    }
    form.classList.add("was-validated");
});

function displayArray() {
    let result = ticketArray.join("");
    document.getElementById("purchaseID").innerHTML = result;

}
