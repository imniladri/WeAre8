// Profile Details
	var people = [	{username: "PROFILENAME1", password: "******"},
					{username: "PROFILENAME2", password: "++++++"},
				 ]


// Login Process

$('form').submit(function() {

	$.username = $('#username');
	$.password = $('#password');
	
	if (username.value.trim() == "")
	{
		swal("Sorry!", "Blank Username Not Allowed!", "error");
		return false;
	}
	else if (password.value.trim() == "")
	{
		swal("Sorry!", "Blank Password Not Allowed!", "error");
		return false;
	}

	else {
		for (i = 0; i < people.length; i++)
		{
			if (username.value == people[i].username)
			{
				if (password.value == people[i].password)
				{
					return true;
				}
				else if (password.value.trim().length < 6)
				{
					swal("Hint!", "Too Short Password!", "info");
					return false;
				}
				else
				{
					swal("Please Check!", "Wrong Password! Ask ADMIN", "warning");
					return false;
				}
			}
		}

		swal("Please Check!", "Wrong Username! Ask ADMIN", "warning");
		return false;
	}
});