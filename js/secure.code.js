
    // CODE/WEBSITE IS SECURED/PROTECTED
    // File: "secure.code.js"

    $(document).ready(function(){
        // Disable CTRL/SHIFT KEY
        $(document).keydown(function(e){
            if (e.ctrlKey && (e.keyCode === 73 || e.keyCode === 83 || 
                              e.keyCode === 85 || e.keyCode === 123))
            {
                swal("Oops!", "Sorry:(, It's not allowed!", "error");
                return false;
            }
            else if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73))
            {
                swal("Oops!", "Sorry:(, It's not allowed!", "error");
                return false;
            }
            else { return true; }
        });

        // Disable Right Click
        $(document).bind("contextmenu", function(e){
            e.preventDefault();
            swal("Oops!", "Sorry:(, It's not allowed!", "error");
            return false;
        });
    });