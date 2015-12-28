/* Declare variable and objects */
var work = {
	"jobs": [
		{ "employer": "Industrial University of Ho Chi Minh City",
		"url":"http://www.hui.edu.vn/en",
		"title": "Lecturer",
		"location": "Ho Chi Minh, Vietnam",
		"dates": "2010 - current",
		"description": "I am teaching undergraduate courses on commerce at faculty of Commerce and Tourism."},

		{ "employer": "Tam Duc Heart Hospital",
		"url":"http://www.tamduchearthospital.com/home/en",
		"title": "MD",
		"location": "Ho Chi Minh, Vietnam",
		"dates": "2003 - 2007",
		"description": "I was a medical doctor at department of internal cardiology."}
	]
};

var projects = {
	"projects": [
		{ "title": "Online resume",
			"dates": "2015",
			"description": "Project 2 Front End Web Developer at Udacity",
			"images": "images/Project2.png"
			},
		{ "title": "Building portfolio",
			"dates": "2015",
			"description": "Project 1 Front End Web Developer at Udacity",
			"images": "images/Project1.png"
			},

		{ "title": "Electronic Commerce Undergraduate Curriculum Program",
			"dates": "2012-2013",
			"description": "As a member of Faculty of Commerce and Tourism at Industrial University of Ho Chi Minh City, I have built the curriculum for the undergradute program on electronic commerce.",
			"images": "images/IUH.png"
			}
	]
};

var bio = {
	"name": "kha tran",
	"role": "Web Developer",
	"contacts": {
		"mobile": "+84 909869829",
		"email": "tranlekha1979@gmail.com",
		"github": "khaletran",
		"twitter": "@khaletran",
		"location": "Ho Chi Minh, Vietnam"},
	"welcomeMessage": "Welcome To The World of Geeks",
	"skills": [
		"Awsomeness", "Adaptability", "Teamwork", "Self-motivated"],
	"bioPic": "images/urban.jpg"
};

var education = {
	"schools": [

		{"name": "Ho Chi Minh University of Science",
		"location": "Ho Chi Minh, Vietnam",
		"degree": "Bachelor",
		"major": "Information Technology",
		"dates": '2014 - 2016',
		"url": "http://www.hcmus.edu.vn/en/index.php"},

		{"name": "Griffith University",
		"location": "Brisbane, Queensland, Australia",
		"degree": "Master",
		"major": "Commerce",
		"dates": '2009 - 2010',
		"url": "https://www.griffith.edu.au/"},

		{"name": "Ho Chi Minh University of Medicine and Pharmacy",
		"location": "Ho Chi Minh, Vietnam",
		"degree": "Bachelor",
		"major": "Medicine",
		"dates": '1997 - 2003',
		"url": "http://moodle.yds.edu.vn/yds2/?Content=thongtinDV&idTin=14115&menu=448"}],

	"onlineCourses": [
	{
		"title": "Front End Web Developer",
		"school": "Udacity",
		"dates": '2015-2016',
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
		"title": "Senior Web Developer",
		"school": "Udacity",
		"dates": 'Future',
		"url": "https://www.udacity.com/course/senior-web-developer-nanodegree--nd802"
		},
		{
		"title": "Machine Learning Engineer",
		"school": "Udacity",
		"dates": 'Future',
		"url": "https://www.udacity.com/course/machine-learning-engineer-nanodegree--nd009"
		}
		]
};

/* Display objects */

bio.display = function ()
{
	var formattedName=HTMLheaderName.replace("%data%", bio.name);
	var formattedRole=HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);

	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGitHub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	var formattedContacts=formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation;
	$("#footerContacts").append(formattedContacts);

	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedPic);

	var formattedMess = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedMess);

	if(bio.skills.length>0)
	{
		$("#header").append(HTMLskillsStart);

		var formattedSkill1 = HTMLskills.replace("%data%",bio.skills[0]);
		$("#skills").append(formattedSkill1);

		var formattedSkill2 = HTMLskills.replace("%data%",bio.skills[1]);
		$("#skills").append(formattedSkill2);

		var formattedSkill3 = HTMLskills.replace("%data%",bio.skills[2]);
		$("#skills").append(formattedSkill3);

		var formattedSkill4 = HTMLskills.replace("%data%",bio.skills[3]);
		$("#skills").append(formattedSkill4);
	}
};

bio.display();

work.display =function()
{
	for (var job in work.jobs)
	{
		if (work.jobs.hasOwnProperty(job))
		{
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedEmployer2=formattedEmployer.replace("#", work.jobs[job].url);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle=formattedEmployer2 + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates=HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);

			var formattedLocation=HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);
			var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}

	}
};

work.display();

function inName()
{
	var name =window.name;
	name=name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] =name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}
var name1 =$("#name").text();

$("#main").append(internationalizeButton);

projects.display = function()
{
	for (var project in projects.projects)
	{
		if (projects.projects.hasOwnProperty(project))
		{
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);
			$(".project-entry:last").append(formattedImage);
		}
	}
};
projects.display();

education.display = function()
{
	for (var edu in education.schools)
	{
		if (education.schools.hasOwnProperty(edu))
		{
			$("#education").append(HTMLschoolStart);

			var formattedName=HTMLschoolName.replace("%data%", education.schools[edu].name);
			var formattedName2=formattedName.replace("#", education.schools[edu].url);
			var formattedDegree=HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
			var formattedNameDegree=formattedName2 + formattedDegree;
			$(".education-entry:last").append(formattedNameDegree);

			var formattedDates=HTMLschoolDates.replace("%data%", education.schools[edu].dates);
			$(".education-entry:last").append(formattedDates);

			var formattedLocation=HTMLschoolLocation.replace("%data%",education.schools[edu].location);
			$(".education-entry:last").append(formattedLocation);

			var formattedMajor=HTMLschoolMajor.replace("%data%",education.schools[edu].major);
			$(".education-entry:last").append(formattedMajor);
		}
	}

	$(".education-entry:last").append(HTMLonlineClasses);
	for (var online in education.onlineCourses)
	{
		if (education.onlineCourses.hasOwnProperty(online))
		{
			var formattedTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[online].title);
			var formattedSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[online].school);
			var formattedTitleSchool = formattedTitle + formattedSchool;
			var formattedTitleSchool2=formattedTitleSchool.replace("#",education.onlineCourses[online].url);
			$(".education-entry:last").append(formattedTitleSchool2);

			var formattedDates2=HTMLonlineDates.replace("%data%",education.onlineCourses[online].dates);
			$(".education-entry:last").append(formattedDates2);

			var formattedURL = HTMLonlineURL.replace("#",education.onlineCourses[online].url);
			var formattedURL2 = formattedURL.replace("%data%", education.onlineCourses[online].url);
			$(".education-entry:last").append(formattedURL2);
		}
	}
};
education.display();

$("#mapDiv").append(googleMap);
