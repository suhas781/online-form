$(document).ready(function() {
    $("#registrationForm").submit(function(event) {
        event.preventDefault(); // Prevent default form submission

        $.ajax({
            url: 'process.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                $("#successMessage").html(response).fadeIn();
                $("#registrationForm")[0].reset(); // Clear the form fields
            },
            error: function() {
                $("#successMessage").html("An error occurred. Please try again.").fadeIn();
            }
        });
    });
});
