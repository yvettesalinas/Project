function loadPostDates() {
    console.log(localStorage.listdata);
    const saveDateData = localStorage.getItem("listdata");
    console.log(saveDateData);
    
    // const savedDatesContainer = $('#savedDatesContainer');
    // const savedDateCard = document.createElement('div');
    // savedDateCard.innerHTML = localStorage.getItem("listdata");
    // savedDatesContainer.append(savedDateCard);
    
};

loadPostDates();