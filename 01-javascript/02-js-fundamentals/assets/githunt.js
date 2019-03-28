$(document).ready(function(){
    $('#githunt button').click(function() {
        $.get("https://api.github.com/users/bowersjj", displayName)
        // Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
        function displayName(data) {
            console.log(data.name);
            $('#githunt p').text(data.name)
            }
        })
    })