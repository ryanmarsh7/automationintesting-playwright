Test Objectives
	•	Automate critical user journeys on https://automationintesting.online/
	•	Demonstrate proficiency in Playwright with TypeScript
	•	Include both functional and non-functional (e.g. performance, accessibility) considerations
 
Upon assignment of the task, I decided to use Playwright with Typescript. It's open source and well supported and Typescript has the type safe functionality that JS doesn't.
I considered using feature files and step definitions to write in a business language, human readable format, but because I didn't have any reference requirements, I opted out of this approach
I decided to use Page Object Model, as it's a great basis for scalable and maintainable frameworks.
I injected the page objects via a fixtures file to prevent 'DRY' in instantiation and used a utilities file for common code like date formatting.
My approach was to create multiple pages, even though I have created a page for 'contact form' when it is still on the 'Home page'
I have a very basic set of validations via the homepage, which could be integrated as a smoke test into the deployment to Dev, to ensure no critical issues
I have some validations of each page (home, admin, contact, reservation) for functional testing.
I also have an E2E test which covers homepage validations, selection of dates, choosing a room, booking that room and sending details, then returning to the home page
I am running headless and multi browser (for which Playwright is renowned for) and have retries for failures (with screen shots and video for fails also)
I have kept the html file of the E2E test passing for Chrome and Safari, but failing for fire fox. You can see the screen prints and video.
The tools used for Playwright are Visual Studio Code 2, I have used Github for version control, Docker for creating a jenkins container with NodeJS and running containerized pipeline jobs.
Jenkins is my CI/CD tool of choice - open source and well supported.
The tests are labelled as test and can all be executed via npx playwright test.
The user can also execute by npx playwrigth test -g "test name"
I have also used the test.describe which is used fro creating suites

Issues reported:
  Critical
    When selecting a room to book and moving to the reservations page, you cannot change the date in the calednar
  High
    Click of Amenities link at top of page doesn’t work
    When there are no rooms available - the rooms screens is just blank and no informational/error displayed
  Medium
    User can add characters into the mobile reservations field
    Name field can have special character
    User can search a date in the past without error
    clicking the Rooms, Booking & Contact links at the bottom of the page, takes you to the top of the page, not the rooms location
  Low
    Clicking of the contact button without all fields populated - the error messages change order

With more time: 
  I would have looked to use JMeter for performance testing and created a simple run of Axe_Core for accessibility testing.




