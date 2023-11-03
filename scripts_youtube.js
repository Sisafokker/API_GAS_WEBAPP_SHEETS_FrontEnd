
// https://docs.google.com/spreadsheets/d/1EI9oSXekQSR1EKUXeiHqA-qfx-kNm-7vH612idRYibA/edit#gid=2053083992

function gettingAPI_one() {
    console.log("Sending GET Request")
    let myAction = "getUsers";
    let url1 = "https://script.google.com/macros/s/AKfycbyOWXRKvrfA_j1u0SYxArANa4OYNBB_47b9AmKpUDgXSJmZO-p_GYH66MxbFgWSJ2Q8/exec"
    
    let response = fetch(url1)  
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        })
}
document.getElementById("btn1-get").addEventListener("click", gettingAPI_one);

function postingAPI_one() {
    console.log("Sending POST Request")
    let url1 = "https://script.google.com/macros/s/AKfycbyOWXRKvrfA_j1u0SYxArANa4OYNBB_47b9AmKpUDgXSJmZO-p_GYH66MxbFgWSJ2Q8/exec"

    let data = {first: "Hernan",  last: "Nani",  division: "MTC"};
    //let data = {first: "Roberto", last: "Santillan", email: "robert@hotmail.com"};
    console.log("Data to Post: ", data);
    let response = fetch(url1, {
        method: 'POST',
        cache: 'no-cache',
        redirect: 'follow',
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
        console.log(res);    
    });
    

    // THIS ALSO WORKS, but its not a promise..
    // let response = fetch(url1, {
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
}
document.getElementById("btn1-post").addEventListener("click", postingAPI_one);


