console.log('connected')

$(document).ready(function () {
    $('.sendButton').click(function (event) {
        event.preventDefault()
        console.log('Send Button Clicked')

        var email = $('.e-mail').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var nameBox = $('.nameBox').val()
        var form = $('.message, .subject, .e-mail').val()

        
        if(nameBox.length > 2) {
        } else {
            swal({
                title: "Name is not valid!",
                text: "Please provide name for identification.",
                icon: "warning",
              })
        }

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
        } else {
            swal({
                title: "Please check correct e-mail syntax",
                text: "Provide at (@) and dot (.) symbol in order to validate.",
                icon: "warning",
              })
        }

        if(subject.length > 2) {
        } else {
            swal({
                title: "Subject not valid!",
                text: "Must contain more than 2 characters.",
                icon: "warning",
              })
        }

        if(message.length > 20) {
        } else {
            swal({
                title: "Message is not valid!",
                text: "Must contain more than 20 characters.",
                icon: "warning",
              })
        }

        if(form.length == 0) {
            swal({
                title: "Form is not valid!",
                text: "Please fill in contact form.",
                icon: "warning",
              })
        }else {
        }
    })
})
