// Profile Details
	var people = [	{username: "ADMIN", password: "ADMIN"},
					{username: "SOURAJEETDEY", password: "11122023"},
					{username: "NILADRIMONDAL", password: "04102023"},
					{username: "ARPANACHARYA", password: "17012023"},
					{username: "AMRIKSAHA", password: "11102023"},
					{username: "SAYANOJHA", password: "22032023"},
					{username: "SHUBHAMGUPTA", password: "04122023"},
					{username: "UMASANKARJANA", password: "16072023"},
					{username: "SOUBHIKSEN", password: "11012023"},
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
				else if (password.value.trim().length < 8)
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