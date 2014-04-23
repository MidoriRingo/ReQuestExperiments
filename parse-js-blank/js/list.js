/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Parse.initialize("V10TgoAKTJ7B8H8YjJhgucaXdGiDeROgxACn6aA2", "1gGbFOhUUrgeVp7JkqLP4XkOc8mBWkrQCU1uKAi8");

var Requests = Parse.Object.extend("Requests");
var vacancyField = document.getElementById("main");
var vacancyDiv;
var text, salary, reward, company;
var newParagraph, rewardParagraph, salaryParagraph, companyParagraph;
var image;
var imageDiv;
var query = new Parse.Query(Requests);

query.find({
    success: function(results) {
        results.forEach(function(entry) {
            vacancyDiv = document.createElement("div");
            vacancyDiv.className = "vacancy";
            
            text = document.createTextNode(entry.get("title"));
            
            newParagraph = document.createElement("p");
            newParagraph.className = "vacancy_title";
            newParagraph.appendChild(text);
            
            reward = document.createTextNode(entry.get("reward") + "$");
            rewardParagraph = document.createElement("p");
            rewardParagraph.className = "vacancy_reward";
            rewardParagraph.appendChild(reward);
            
            salary = document.createTextNode("�� " + entry.get("salary") + " $");
            salaryParagraph = document.createElement("p");
            salaryParagraph.className = "vacancy_salary";
            salaryParagraph.appendChild(salary);
            
            company = document.createTextNode(entry.get("company"));
            companyParagraph = document.createElement("p");
            companyParagraph.className = "vacancy_company";
            companyParagraph.appendChild(company);

//			image = document.createElement("img");
//			image.className = "vacancy_image";
//			image.src = entry.get("image").url();
            
            vacancyDiv.appendChild(rewardParagraph);
            vacancyDiv.appendChild(newParagraph);
            vacancyDiv.appendChild(salaryParagraph);
            vacancyDiv.appendChild(companyParagraph);
//            vacancyDiv.appendChild(image);
            vacancyField.appendChild(vacancyDiv);
        });
    },
    error: function(error) {
        alert('Server error! Please, refresh page!')
    }
});



