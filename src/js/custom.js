// Username validation
$("#username").change(function () {
    var username = $(this).val();

    $.ajax({
        type: 'GET',
        url: 'usernamevalidator',
        data: {
            "username": username
        },
        dataType: 'json',
        success: function (result) {
            if (result.is_taken) {
                // $("#username_validation").html(result.error_message);
                document.getElementById("username").style.borderColor = "red";
            }
            else {
                // $("#username_validation").html(result.success_message);
                document.getElementById("username").style.borderColor = "green";
            }
        },
        error: function (result) {
            $("#username_validation").html(result.error_message);
        }
    });
});

// Password validation
$("#password, #confirm_password").on('keyup', function () {
    if ($("#password").val() != $("#confirm_password").val()) {
        // $("#password_validator").html("Passwords do not match!");
        $("#password_validator").html("Passwords do not match!").css("color", "red");
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("confirm_password").style.borderColor = "red";
    }
    else {
        $("#password_validator").html("");
        document.getElementById("password").style.borderColor = "green";
        document.getElementById("confirm_password").style.borderColor = "green";
    }
});

// Checkbox select
$("#customCheck1").click(function () {
    $("#agree_button").attr("disabled", !this.checked);
});
