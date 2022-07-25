#Jquery/Ajax  
 
    $('#send').click(function(e){ 
        e.preventDefault(); 
        data = { 
            "username": $('#username').val(), 
            "password": $('#password').val() 
         }; 
        $.ajax({ 
            type: "POST", 
            url: "http://<base_url>/api/v1/user/login/", 
            data: JSON.stringify(data), 
            dataType: "json", 
            contentType: "application/json", 
            success: function(data) {console.log(data)}, 
            error: function (rs, e) {console.debug(rs)} 
        }); 
    }); 
