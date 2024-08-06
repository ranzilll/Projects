document.getElementById('loadData').addEventListener('click',function(){

    const xhr = new XMLHttpRequest();

    xhr.open('GET','https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json',true);

    xhr .send();

    xhr.onload = function(){
        if(xhr.status != 200){
            alert(`Error ${xhr.status}: ${xhr.statusText}`)
            console.log(xhr.status);
        }
        else{
            const data = JSON.parse(xhr.responseText);
            displayData(data);
        }
    };

    xhr.onerror = function(){
        alert("Request faild");
    };
});

function displayData(data)
{
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    data.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `My name is ${item.name} and i speak ${item.language}`;
        resultDiv.appendChild(div);
    });
}