function button1(){
    let txtInput =  document.getElementById("ftopic");
    let txtOut = document.getElementById("output");
    let topicIn = txtInput.value;
    let topic = "";
    if(topicIn == ""){
        topic = "create a random dad joke.";
    } else{
        topic = "create a dad joke about " + topicIn + ".";
    }
    txtOut.value = topic; //comment out for gpt mode
    console.log("entered: " + topic);
    //GPT 3 mode:
    /*
    console.log("Calling GPT3")
    var url = "https://api.openai.com/v1/engines/davinci/completions";
    var bearer = 'Bearer ' + YOUR_TOKEN
    fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "prompt": topic,
            "max_tokens": 5,
            "temperature": 1,
            "top_p": 1,
            "n": 1,
            "stream": false,
            "logprobs": null,
            "stop": "\n"
        })


    }).then(response => {
        
        return response.json()
       
    }).then(data=>{
        console.log(data)
        console.log(typeof data)
        console.log(Object.keys(data))
        console.log(data['choices'][0].text)
        
    })
        .catch(error => {
            console.log('Something bad happened ' + error)
        });*/
}

function button2() {
    let txtOut = document.getElementById("output");
    let topic = "create a random dad joke.";
    txtOut.value = topic;
    console.log(topic); //comment out for gpt mode

    //GPT 3 mode:
    /*
    console.log("Calling GPT3")
    var url = "https://api.openai.com/v1/engines/davinci/completions";
    var bearer = 'Bearer ' + YOUR_TOKEN
    fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "prompt": topic,
            "max_tokens": 5,
            "temperature": 1,
            "top_p": 1,
            "n": 1,
            "stream": false,
            "logprobs": null,
            "stop": "\n"
        })


    }).then(response => {
        
        return response.json()
       
    }).then(data=>{
        console.log(data)
        console.log(typeof data)
        console.log(Object.keys(data))
        console.log(data['choices'][0].text)
        
    })
        .catch(error => {
            console.log('Something bad happened ' + error)
        });*/
}
