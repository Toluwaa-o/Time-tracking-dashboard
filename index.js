let daily = document.getElementById("daily")
let weekly = document.getElementById("weekly")
let monthly = document.getElementById("monthly")
let currrentTime = document.querySelectorAll(".curr-time")
let pastTime = document.querySelectorAll(".past-time")

daily.addEventListener("click", function(){
    daily.style.color = "white"
    monthly.style.color = "hsl(236, 100%, 87%)"
    weekly.style.color = "hsl(236, 100%, 87%)"
    currrentTime[0].textContent = "5hrs"
    currrentTime[1].textContent = "1hr"
    currrentTime[2].textContent = "0hrs"
    currrentTime[3].textContent = "1hr"
    currrentTime[4].textContent = "1hr"
    currrentTime[5].textContent = "0hrs"

    pastTime[0].textContent = "Yesterday - 7hrs"
    pastTime[1].textContent = "Yesterday - 2hrs"
    pastTime[2].textContent = "Yesterday - 1hr"
    pastTime[3].textContent = "Yesterday - 1hr"
    pastTime[4].textContent = "Yesterday - 3hrs"
    pastTime[5].textContent = "Yesterday - 1hr"
})


weekly.addEventListener("click", function(){
    weekly.style.color = "white"
    monthly.style.color = "hsl(236, 100%, 87%)"
    daily.style.color = "hsl(236, 100%, 87%)"
    currrentTime[0].textContent = "32hrs"
    currrentTime[1].textContent = "10hrs"
    currrentTime[2].textContent = "4hrs"
    currrentTime[3].textContent = "4hrs"
    currrentTime[4].textContent = "5hrs"
    currrentTime[5].textContent = "2hrs"

    pastTime[0].textContent = "Last Week - 36hrs"
    pastTime[1].textContent = "Last Week - 8hrs"
    pastTime[2].textContent = "Last Week - 7hrs"
    pastTime[3].textContent = "Last Week - 5hrs"
    pastTime[4].textContent = "Last Week - 10hrs"
    pastTime[5].textContent = "Last Week - 2hrs"
})

monthly.addEventListener("click", function(){
    monthly.style.color = "white"
    weekly.style.color = "hsl(236, 100%, 87%)"
    daily.style.color = "hsl(236, 100%, 87%)"
    currrentTime[0].textContent = "103hrs"
    currrentTime[1].textContent = "23hrs"
    currrentTime[2].textContent = "13hrs"
    currrentTime[3].textContent = "11hrs"
    currrentTime[4].textContent = "21hrs"
    currrentTime[5].textContent = "7hrs"

    pastTime[0].textContent = "Last Month - 128hrs"
    pastTime[1].textContent = "Last Month - 29hrs"
    pastTime[2].textContent = "Last Month - 19hr"
    pastTime[3].textContent = "Last Month - 18hrs"
    pastTime[4].textContent = "Last Month - 23hrs"
    pastTime[5].textContent = "Last Month - 11hrs"
})