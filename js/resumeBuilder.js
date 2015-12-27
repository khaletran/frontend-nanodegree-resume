
var work = {
	"jobs": [
	{ "employer": "IUH",
	"title": "Lecturer",
	"location": "Ho Chi Minh",
	"dates": "2010 - Now",
	"description": "Teaching as a lecturer on commerce courses."}
	]
}
var projects = {
	"projects": [
	{ "title": "Electronic Commerce",
		"dates": "2012",
		"description": "EC project"
		}
	]
}

var bio = {
	"name": "Kha Tran",
	"role": "Web Developer",
	"contact": {
		"mobile": "+84909869829",
		"email": "tranlekha1979@gmail.com",
		"github": "khaletran",
		"twitter": "@khaletran",
		"location": "Ho Chi Minh"},
	"welcomeMessage": "Hello World! Do the best for your interests!",
	"skills": [
		"awsomeness", "fun", "fall asleep easily", "socialize"],
	"bioPic": "images/urban.jpg"
	}

var education = {
	"school": [
	{"name": "Griffith University",
	"city": "Brisbane",
	"degree": "Master",
	"major": "Commerce",
	"dates": 2010,
	"url": "http://example.com"}],

	"onlineCourses": [
	{
		"title": "JavaScript",
		"school": "Udacity",
		"dates": 2015,
		"url": "http://www.udacity.com/course"
		}]
}

var formattedName=HTMLheaderName.replace("%data%", bio.name);
var formattedRole=HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


//$("#topContacts").append(HTMLcontactGeneric);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
$("#topContacts").append(formattedEmail);

var formattedGitHub = HTMLgithub.replace("%data%", bio.contact.github);
$("#topContacts").append(formattedGitHub);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
$("#topContacts").append(formattedTwitter);

var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
$("#topContacts").append(formattedLocation);


var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPic);

var formattedMess = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedMess);


if(bio.skills.length>0)
{
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);

}

function displayWork()
{
	for (var job in work.jobs)
	{
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle=formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates=HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

function inName(name)
{
	var myString = name;
	var myArray = myString.trim().split(" ");
	myArray[0]=myArray[0].slice(0,1).toUpperCase() + myArray[0].slice(1).toLowerCase();
	myArray[1]=myArray[1].toUpperCase();
	myString = myArray.join(" ");
	return myString;
}
$("#main").append(internationalizeButton);

projects.display = function()
{
	for (project in projects.projects)
	{
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
	}
}
projects.display();
