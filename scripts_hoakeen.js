// https://docs.google.com/spreadsheets/d/1pU7soyuBpZwYKjPJQfDLmCoN8ItX-1r-dCIgwNNTN2s/edit#gid=1214330875

function gettingAPI_two() {
    let myAction = "getUsers";
    let url2= "https://script.google.com/macros/s/AKfycbxsuLcf99lqlnQzuB9jjN99Ixwi600jS18x68I_2nNBDIOQpqzImdBkk-3FNmqXtgV-/exec"
    
    let response = fetch(url2)  
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        })
    
        console.log(response);
}
document.getElementById("btn2-get").addEventListener("click", gettingAPI_two);

function postingAPI_two() {
    let url2= "https://script.google.com/macros/s/AKfycbxsuLcf99lqlnQzuB9jjN99Ixwi600jS18x68I_2nNBDIOQpqzImdBkk-3FNmqXtgV-/exec"

    let data = {first: "Beatriz", last: "Crazy", email: "something@hotmail.com"};
    // let response = fetch(url2, {
    //     method: 'POST',
    //     mode: 'no-cors',
    //     cache: 'no-cache',
    //     credentials: 'omit',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     redirect: 'follow',
    //     body: JSON.stringify(data)
    // });

    // This ALSO WORKS
    let response = fetch(url2, {
        method: 'POST',
        cache: 'no-cache',
        redirect: 'follow',
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
        console.log(res);    
    })
    .catch(err => {
        console.log(err);
    });

}
document.getElementById("btn2-post").addEventListener("click", postingAPI_two);