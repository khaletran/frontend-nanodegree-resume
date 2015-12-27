var work = {
	"jobs": [
		{ "employer": "Industrial University of Ho Chi Minh",
		"title": "Lecturer",
		"location": "Ho Chi Minh, Vietnam",
		"dates": "2010 - ",
		"description": "I am teaching undergraduate commerce courses at the faculty of Commerce and Tourism."},

		{ "employer": "Ho Chi Minh Heart Institue",
		"title": "Physician",
		"location": "Ho Chi Minh, Vietnam",
		"dates": "2003 - 2007",
		"description": "I was a medical doctor at internal cardiology department."}
	]
}

var projects = {
	"projects": [
	{ "title": "Electronic Commerce Curriculum",
		"dates": "2012-",
		"description": "I am a faculty's member of Commerce and Tourism to build the curriculum for undergradute electronic commerce program."
		}
	]
}

var bio = {
	"name": "Kha Tran",
	"role": "Web Developer",
	"contact": {
		"mobile": "+84 909869829",
		"email": "tranlekha1979@gmail.com",
		"github": "khaletran",
		"twitter": "@khaletran",
		"location": "Ho Chi Minh, Vietnam"},
	"welcomeMessage": "Hello World! Do the best for your interests!",
	"skills": [
		"awsomeness", "fun", "fall asleep easily", "socialize"],
	"bioPic": "images/urban.jpg"
	}

var education = {
	"school": [

		{"name": "Ho Chi Minh University of Science",
		"city": "Ho Chi Minh, Vietnam",
		"degree": "Bachelor",
		"major": "Information Technology",
		"dates": '2014 - 2016',
		"url": "http://www.hcmus.edu.vn/en/index.php"},

		{"name": "Griffith University",
		"city": "Brisbane, Queensland, Australia",
		"degree": "Master",
		"major": "Commerce",
		"dates": '2009 - 2010',
		"url": "https://www.griffith.edu.au/"},

		{"name": "Ho Chi Minh University of Medicine and Pharmacy",
		"city": "Ho Chi Minh, Vietnam",
		"degree": "Bachelor",
		"major": "Medicine",
		"dates": '1997 - 2003',
		"url": "http://moodle.yds.edu.vn/yds2/?Content=thongtinDV&idTin=14115&menu=448"}],

	"onlineCourses": [
	{
		"title": "Front End Web Developer",
		"school": "Udacity",
		"dates": '2015-',
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


function displayEducation()
{
	for (var edu in education.school)
	{
		$("#education").append(HTMLschoolStart);

		var formattedName=HTMLschoolName.replace("%data%", education.school[edu].name);
		var formattedDegree=HTMLschoolDegree.replace("%data%", education.school[edu].degree);
		var formattedNameDegree=formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);

		var formattedDates=HTMLschoolDates.replace("%data%", education.school[edu].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation=HTMLschoolLocation.replace("%data%",education.school[edu].city);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor=HTMLschoolMajor.replace("%data%",education.school[edu].major);
		$(".education-entry:last").append(formattedMajor);
	}
}
displayEducation();
