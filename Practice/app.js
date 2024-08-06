document.getElementById('loadData').addEventListener('click', function() {
  // Step 1: Create an XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Step 2: Configure it: GET-request for the URL
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

  // Step 3: Send the request over the network
  xhr.send();

  // Step 4: This will be called after the response is received
  xhr.onload = function() {
    if (xhr.status != 200) { // analyze HTTP response status
      alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
    } else { // show the result
      const data = JSON.parse(xhr.responseText); // parse the JSON response
      displayData(data);
    }
  };

  xhr.onerror = function() {
    alert("Request failed");
  };
});

function displayData(data) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = ''; // Clear any previous data

  data.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `Post ${item.id}: ${item.title}`;
    resultDiv.appendChild(div);
  });
}