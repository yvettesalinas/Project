var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  // Replace `octocat` with anyone else's GitHub username
  var requestUrl = 'www.thecocktaildb.com/api/json/v1/1/random.php';

  fetch(requestUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      for (var i = 0; i < data.length; i++) {
        // var listItem = document.createElement('li');
        // listItem.textContent = data[i].html_url;
        // repoList.appendChild(listItem);
      }
    });
}

console.log(getApi);
// fetchButton.addEventListener('click', getApi);
getApi();