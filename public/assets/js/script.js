$(".deleteBurger").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    console.log("this is your id" + id);

    // Send the DELETE request.
    $.ajax({
        type: "DELETE",
        url: "/api/burgers/" + id
    }).then(location.reload());
});