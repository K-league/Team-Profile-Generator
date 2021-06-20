//need giant functo gen team
//each of the differe func to genr team: CARDS look up bootstrap card title, role, other
//to get put this in lik ${manager.getName}
//make HTML array to allow all stuff to be pushed into 
//make one more template model. exports = team to retunr html gnereate team 

const generateManagerCard = (manager) => {
    return `<div class="col">
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
    <p class="card-text">
        ID: ${manager.getId()}<br>
        Email: <a href="mailto:${manager.getEmail()}" class="card-link">${manager.getEmail()}</a><br>
    </p>
    Office Number: ${manager.getOfficeNumber()}
  </div>
</div></div>
    `;
}

const generateEngineerCard = (engineer) => {
    return `<div class="col">
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${engineer.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
    <p class="card-text">
        ID: ${engineer.getId()}<br>
        Email: <a href="mailto:${engineer.getEmail()}" class="card-link">${engineer.getEmail()}</a><br>
    </p>
    Github: <a href="http://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a>
  </div>
</div></div>
    `;
}

const generateInternCard = (intern) => {
    return `
    <div class="col">
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${intern.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
    <p class="card-text">
        ID: ${intern.getId()}<br>
        Email: <a href="mailto:${intern.getEmail()}" class="card-link">${intern.getEmail()}</a><br>
    </p>
    School: ${intern.getSchool()}
  </div>
</div></div>
    `;
}

const generateCards = (team) => {
    let cards = "";
    team.forEach((employee) => {
        if(employee.getRole() === "Manager") {
            cards += generateManagerCard(employee);
        } else if (employee.getRole() === "Engineer") {
            cards += generateEngineerCard(employee);
        } else if (employee.getRole() === "Intern") {
            cards += generateInternCard(employee);
        }
    });
    return cards;
}

const generateHtml = (team) => {
    cards = generateCards(team);
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
        <style>
            .jumbotron {
                background-color: red;
            }
            .card {
                margin: 10px;
            }
        </style>
        <title>Document</title>
    </head>
    <body>
    <div class="jumbotron">
  <h1 class="display-4 center"><center>My team</center></h1>
  </div>
        <div class="container"><div class="row">${cards}</div></div>
    </body>
    </html>
    `
}

module.exports = {
    generateManagerCard,
    generateEngineerCard,
    generateInternCard,
    generateHtml
}