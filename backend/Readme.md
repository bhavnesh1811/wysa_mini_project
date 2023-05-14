### For screen 1, Add Sleep Struggle data.

POST /sleepStuggle
Host: {{baseUrl}}

{
"updateObject": {
        username: "Bhavnesh",
        sleepStuggle: "2 to 8 weeks",
        }
}

<!--
response:

{
    "status": 200,
    "msg: "Sleep Struggle response added"",
    "displayMessage": "Successful"
}
-->

### For screen 2, Add Go to Bed Time.

POST /goTobed
Host: {{baseUrl}}

{
"updateObject": {
        username: "Bhavnesh",
        goTobed: "11:00 Pm",
        }
}

<!--
response:

{
    "status": 200,
    message: "Go to bed response added",
    displayMessage: "Successful",
}
-->

### For screen 3, Add Get Out of Bed Time.

POST /getOutofBed
Host: {{baseUrl}}

{
"updateObject": {
        username: "Bhavnesh",
        getOutofBed: "7:00 Am",
        }
}

<!--
response:

{
    "status": 200,
    message: "Get out of Bed response added",
    displayMessage: "Successful",
}
-->

### For screen 4, Add typical day sleep Hours.

POST /sleepHours
Host: {{baseUrl}}

{
"updateObject": {
        username: "Bhavnesh",
        sleepHours: "5",
        }
}

<!--
response:

{
    "status": 200,
    message: "Sleep Hours response added",
    displayMessage: "Successful",
}
-->

### For screen 5, Calculate Efficiency.

GET /sleepEfficiency
Host: {{baseUrl}}

{
    Calculate effiency based on data added.
    {
        _id: new ObjectId("645f527d5024d0c22489d2ba"),
        username: 'Bhavnesh',
        sleepStuggle: '2 to 8 weeks',
        goTobed: '11:00 Pm',
        getOutofBed: '7:00 Am',
        sleepHours: '5',
        sleepEfficiency: 0,
        __v: 0
    }
}
<!--
response:

{
    "status": 200,
    sleepEfficiency: 63,
    displayMessage: "Successful",
}
-->