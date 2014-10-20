1) - This code is designed to display different language Email types to Contacts from that country.
2) - In our code, we have three countries - UK, Germany, Denmark.
3) - Each Country has two Email types, that were set up in Content settings in HubSpot. Each of these types has its own id/code,
which can be found in the source HTML of the default Email preference page.
4) - Find these codes in your source, and edit the JS to reflect these.
5) - Add your JS to a HTML Module on the template.
6) - Create a new dropdown select property in HubSpot called "Email Country", which will have the API Name email_country. Create the values of the countries you need.
6a) - If you don't use this property name, edit step 5 and 7 to reflect the name you give it, as well as the values you've added (if they correspond to Email types)
7) - Create a HubL module on the template and include this code: <span id="email-country">{{ contact.email_country }}</span>
8) - Create a test contact for yourself by submitting to a HS form on the website. Note: The cookie MUST be dropped for this to work correctly.
9) - Send yourself a test email from the portal and click on the Email Preferences link in the footer.
10) - Change the Email Country property value in your Contact record to see just the Email types that country is supposed to see.

You can see this in action in portal 443658 if you have admin rights.
