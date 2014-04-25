/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var vacancyName;
var companyName;
var description;
var demands;
var terms;
var salary;
var city;
var address;
var reward;
var expireDate;

function getFirstData() {
    vacancyName = document.getElementById("vacancyName").value;
    companyName = document.getElementById("companyName").value;
    description = document.getElementById("description").value;
    demands = document.getElementById("demands").value;
    terms = document.getElementById("terms").value;
    salary = document.getElementById("salary").value;
    city = document.getElementById("city").value;
    address = document.getElementById("address").value;
    
    alert(vacancyName + " " + address);
    $('#main').load('form/new_vacancy_step2.html #form2 > *');
}

function getSecondData() {
    reward = document.getElementById("reward").value;
    expireDate = document.getElementById("expireDate").value;
    
    alert(reward + " " + expireDate + " " + demands);
    makeVacancy();
}

function makeVacancy() {
    Parse.initialize("V10TgoAKTJ7B8H8YjJhgucaXdGiDeROgxACn6aA2", "1gGbFOhUUrgeVp7JkqLP4XkOc8mBWkrQCU1uKAi8");
    
    var Requests = Parse.Object.extend("Requests");
    var request = new Requests();

    request.set("title", vacancyName);
    request.set("expire", expireDate);
    request.set("company", companyName);
    request.set("reward", reward);
    request.set("salary", salary);
    request.set("demands", demands);
    request.set("terms", terms);
    request.set("company_address", address);
    request.set("company_description", description);
    
    request.save(null, {
        success: function(request) {
            // Execute any logic that should take place after the object is saved.
            alert('New object created with objectId: ' + request.id);
        },
        error: function(request, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and description.
            alert('Failed to create new object, with error code: ' + error.description);
        }
    });
}