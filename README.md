# Project14_PublicAPIRequest
Communicating with APIs allows you to work with microservices and with vast databases to build useful tools and relevant information quickly and easily. You can build utilities, games, infographics, and more. You can also integrate, display, and analyze social media and large data sets without having to create and curate them yourself.

For this project, you'll build an app for a fictional company called Awesome Startup, a distributed company with remote employees working all over the world. They need a smart way for employees to share contact information with each other.

You’ll use the Random User Generator API (https://randomuser.me/) to grab information for 12 random “employees,” and use that data to build a prototype for an Awesome Startup employee directory.

You’ll request a JSON object from the API and parse the data so that 12 employees are listed in a grid with their thumbnail image, full name, email, and location. Clicking the employee’s image or name will open a modal window with more detailed information, such as the employee’s birthday and address.

You may use jQuery with this project, but other frameworks, libraries or plugins are not permitted. While there are plugins that can help with the creation of a gallery and modal setup, it is important for developers to be able to understand how tools like that work "under the hood". So you'll need to write all your own JS or jQuery to create the necessary functionality for this project.

After building this project, you'll have yet another excellent portfolio piece to show off and demonstrate your incredible skills, which will now include working with public APIs, making API requests, and asynchronously handling the data that will be returned from your requests and displayed in an app.

Before you atart
1.Review the policy on Reusing Code in a Techdegree project.

2.GitHub
  Create a new repo for this project.
  Create a README.md file for your repo that explains what the projects is and anything your user or fellow developers might need to know to use the project.

3.Download the project source files.
  index.html - basic markup that you'll dynamically add DOM elements to.
  css/styles.css - all the basic styles you'll need for this project. But you are encouraged to experiment with things like color, background color, font, shadows, transitions and animations to make this project your own.
  css/normalize.css - for cross-browser consistency.
  mockups/employee_directory.png and mockups/employee_overlay.png - examples of what the finished project should look like.

4.Review the Random User Generator documentation. Grab the example they provide and console.log the data so you can see what information you’ll receive and start to think about how you’ll access the correct information and display it on the page.

5.Follow the Instructions Below
  Be sure to reach out on Slack if you get stuck or run into difficulties.

Project Instructions
  To complete this project, follow the instructions below. If you get stuck, ask a question on Slack or in the Treehouse Community.

1.Create your js/scripts.js file and wire it up to the HTML
  You may use jQuery if you like.
  Other frameworks, libraries or plugins are not permitted.

2.HTML
  You'll be provided with a basic index.html file to use in your project. But this file is missing the main components of the app, which you will need to create and add to the DOM dynamically.
  Comments in the index.html file contain examples of the markup you'll need to add. So use the markup in those comments as a template. And keep in mind that altering the arrangement of the markup and the attributes used may break the styles or functionality.

3.Structure, style and CSS
  Your finished project should match the general position and layout of the mockups. If you you followed the arrangement and attributes of the template markup in the HTML comments, then the provided styles should accomplish this for you.
  You are encouraged to experiment with things like color, background color, font, shadows, transitions and animations to make this project your own.

4.Get and display 12 random users
  With information provided from The Random User Generator API, send a request to the API, and use the response data to display 12 users, along with some basic information for each:
    Image
    First and Last Name
    Email
    City or location
  Refer to the mockups and the comments in the index.html file for an example of what info should be displayed on the page and how it should be styled.

5.Create a modal window
    When any part of an employee item in the directory is clicked, a modal window should pop up with the following details displayed:
      Image
      Name
      Email
      City or location
      Cell Number
      Detailed Address, including street name and number, state or country, and post code.
      Birthday
    Make sure there’s a way to close the modal window
    Refer to the mockups and the comments in the index.html file for an example of what info should be displayed on the page and how it should be styled.

6.Add good code comments

7.Check for cross-browser consistency
  To pass, your project only needs to work in Chrome, but it's good to get in the habit of checking your work in multiple browsers.

8.Carefully review the "How you'll be graded" section.

9.Quality Assurance and Project Submission Checklist
  Perform QA testing on your project, checking for bugs, user experience and edge cases.
  Check off all of the items on the Student Project Submission Checklist.

NOTE: Seeking assistance

  If you're feeling stuck or having trouble with this project
  Review material in the unit.
  Practice your Google skills by finding different ways to ask the questions you have, paying close attention to the sort of results you get back depending on how your questions are worded.
  Reach out to the team on Slack.

NOTE: What you submit is what will get reviewed.

  When you submit your project, a snapshot is taken of your repository, and that is what the reviewer will see. Consequently, any changes you make to your repo after you submit will not be seen by the reviewer. So before you submit, it's a smart idea to do a final check to make sure everything in your repo is exactly what you want to submit.

Extra Credit
  To get an "exceeds" rating, you can expand on the project in the following ways:

1.Search
  Add a way to filter the directory by name. To do this, you’ll need to adjust your API request to retrieve a user nationality that will only return data in the English alphabet.
  Example markup for this feature is included in the HTML comments.

  Note: Your search feature should filters results that are already on the page. So don't request new info from the API for your search.

2.Modal toggle
  Add a way to toggle back and forth between employees when the modal window is open.
  There should be no errors once the end or beginning of the list is reached.
  Example markup for this feature is included in the HTML comments.

3.Structure, style and CSS
  Add or change at least one of the following:
    color
    background color
    font
    box or text shadows
  Document your style changes in your readme file and the project submission notes.
  Do not alter the layout or position of the important elements on the page.

NOTE: Getting exceeds

To get an "Exceeds Expectations" grade for this project, you'll need to complete each of the items in this section. See the rubric in the "How You'll Be Graded" tab above for details on how you'll be graded.
If you’re shooting for the "Exceeds Expectations" grade, it is recommended that you mention so in your submission notes.
Passing grades are final. If you try for the "Exceeds Expectations" grade, but miss an item and receive a "Meets Expectations" grade, you won’t get a second chance. Exceptions can be made for items that have been misgraded in review.
