/*
* Searches either youtube or google
* Author : Vereis~
*/

function search(input, args)
{
	if (input == "google") // This if/else tree generates pre-query urls
	{	
		var http = "https://www.google.com/search?q=";
	}
	else if (input == "youtube")
	{
		var http = "https://www.youtube.com/results?search_query=";
	}
	else if (input == "notion"){
		var http = "https://www.notion.so/7622a9d3bd964ef9827d97736c84f900?v=2c21cb3e3d504544919508ccd49827ba";
	}

	// --------------------------------------------------------------------- //
	
	if (args == "empty") // This if/else tree generates a search string and or redirects to said site
	{
		window.location = http; // This may as well be an alias of site args for specific sites
	}
	else if (args != "empty")
	{
		var query = "";
		for (i = 0; i != args.length; i++)
		{
			query += args[i] + "+";
		}
		window.location = http + query; // Otherwise perform a search
	}
}