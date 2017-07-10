
/*
This is empty on purpose! Your code to build the resume will go here.
 */
// creating bio
var bio = {
    "name": "Kalana Agalakotuwa",
    "role": "Web Developer",
    "contacts": {
        "mobile": "701-203-2177",
        "email": "kalana1on1@gmail.com",
        "github": "https://github.com/kalana1985",
        "Linkdin": "https://www.linkedin.com/in/kalana-agalakotuwa-86385430/",
        "twitter": "https://twitter.com/kalana1on1",
        "location": "Grand Forks,ND,USA"
    },
    "biopic": "images/IMG_2434.PNG",
    "welcomeMessage": "Hi, Im a Front-end Web Developer. Thanks for stoping by my resume ! ",
    "skills": [
        "MIcrosoft Office", "HTML", "CSS", "Bootstrap", "Grunt", "Git & GitHub", "JavaScript",
        "jQuery", "AJAX", "React", "Networking enthusiast",
        "Fluent in English, Sinhala and moderate in Tamil", "Very good badminton player"
    ],

};
/*
var formatterdContact=HTMLcontactGeneric.replace("%contact%",bio.contactInfo);
$("#header").append(formatterdContact)''
*/
//creating education

var education = {
    "schools": [

        {
            "name": "Sri Sumangala college",
            "location": "Kandy, Sri Lanka",
            "degree": "High School Diploma",
            "majors": ["Science"],
            "dates": "2006",
            "url": "http://www.wssck.sch.lk/"
        },
        {
            "name": "Northland Community and Technical College",
            "location": "Thief River Falls, MN",
            "degree": "AAS",
            "majors": ["Aircraft maintenance technology"],
            "dates": "2015",
            "url": "http://www.northlandcollege.edu/",
        }
    ],
    "onlineCourses": [

        {
            "title": "Front-end Devaloper Nano degree",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },

        {

            "title": "Full Stack JavaScript",
            "school": "TreeHouse",
            "dates": "2017",
            "url": "https://teamtreehouse.com/tracks/full-stack-javascript"
        }
    ]
};

//creating work

var work = {
    "jobs": [{
            "employer": "Laksiri Cargo Services",
            "location": "Singapore",
            "title": "Assistant manager",
            "dates": "03/2010 - 09/2011",
            "description": "Answered an average about 10 to 20 calls per day by addressing customer inquiries" + "," +
                "solving problems and Providing newer product information.Divided cargo received by account number and intended." +
                " Gathered logged and monitored all shipping data.Led warehouse improvement initiatives to advance operational efficiencies.Made strategic decisions regarding future targets.Supervised social media marketing strategies."
        },
        {

            "employer": "Digi-key Corporation",
            "location": "Thief River Falls, MN",
            "title": "PDC Order Fulfillment Team Member",
            "dates": "10/2012 - 09/2015",
            "description": "Pick parts in an assigned zone Quickly and accuratelyInspect quality of the product before prepackaging Shipping (processing).Act as a liaison between Sales, customer service, and PDC.Handle customer change order request when applicable Bagged, boxed or gift-wrapped sold merchandise per customer's request.Investigated and resolved customer inquiries and complaints in a timely manner"
        },
        {

            "employer": "LM WIND POWER",
            "location": "Grand Forks, ND",
            "title": "Production Technician",
            "dates": "01/2016 - 06/2016",
            "description": "Removes any debris from the mold surface and prepare it for the gel coat application process After gel coat has been applied, they begin to lay the layers of fiberglass. Once the materials have been properly combined they prepare to infuse the blade with resin.Completed company leadership training program."
        },
        {

            "employer": "FCC Communication",
            "location": "Grand Forks, ND",
            "title": "IT Technician",
            "dates": "11/2015 - Current",
            "description": "Maintain computers and CTP printers mixing the chemicals incorrect ratio with appropriate PPE. Monitor development of News pages regularly and update system accordingly. Maintain Communication with Downtown Office in regular basis when printing underway.Maintained friendly and professional customer interactions at all times."
        }
    ]
};

//creating projects


var projects = {
    "projects": [{
            "title": "Animal Trading Card",
            "dates": "January,2017",
            "description": "This is the first project in Udacity, I mocked an animal trading PDF and create a simple web page using HTML and CSS.",
            "images": ["images/animal.png"]
        },
        {
            "title": "Framework",
            "dates": "April,2017",
            "description": "In this project I mocked another PDF file, I create my own 12-colum CSS framework." +
                "It's a fully responsive web page with couple of breakpoints using Media Queries to be compatible with various devices",
            "images": ["images/responsive.png"]
        }
    ]
};




//adding bio

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);



    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);



    //adding contact


    var formattedContacts = [];
    formattedContacts.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContacts.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContacts.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContacts.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    formattedContacts.push(HTMLlocation.replace("%data%", bio.contacts.location));


    for (i = 0; i < formattedContacts.length; i++) {
        $("#topContacts").append(formattedContacts[i]);
        $("#footerContacts").append(formattedContacts[i]);
    }
    /*
    for(contact in formattedContactInfo) {
        $("#topContacts").append(formattedContactInfo[contact]);
        $("#footerContacts").append(formattedContactInfo[contact]);
    }
    */

    //adding skills


    $("#header").append(HTMLskillsStart);
    for (i = 0; i < bio.skills.length; i++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
};

bio.display();

/*

    $("#header").append(HTMLskillsStart);
        
    for(skill in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
    }

}
*/

//adding work

work.display = function() {
    //function displayWork() {



    $("#workExperience").append(HTMLworkStart);
    for (i = 0; i < work.jobs.length; i++) {
        //for(i in work.jobs) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

        var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

        $(".work-entry:last").append(formattedEmployerWorkTitle);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedDatesWorked);
        $(".work-entry:last").append(formattedWorkDescription);
    }



};

work.display();

//display projects

projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);

        for (var j = 0; j < projects.projects[i].images.length; j++) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};

projects.display();

//adding education 

education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedSchoolMajor);

    }

    $("#education").append(HTMLonlineClasses);
    for (var j = 0; j < education.schools.length; j++) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
        $(".education-entry:last").append(formattedOnlineDates);

        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
        $(".education-entry:last").append(formattedOnlineURL);
    }
};

education.display();

$("#mapDiv").append(googleMap);

















