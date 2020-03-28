const pricing = {
  studio: 10,
  "1bed": 15,
  "2bed": 20
};

let model = {
  startdate: "yyyy-mm-dd",
  enddate: "yyyy-mm-dd",
  room: "",
  sum: 0
};

myBinder.bind("#startdate", model, "startdate");
myBinder.bind("#enddate", model, "enddate");
myBinder.bind("#room", model, "room");
myBinder.bind("#sum", model, "sum");

// document.querySelector("button").addEventListener("click", calc);

function calc(){
    if (model.startdate && model.enddate && model.room) {
        console.log("if");
    
        const days = Math.round(
          (new Date(model.enddate) - new Date(model.startdate)) /
            (24 * 60 * 60 * 1000)
        );
        if (pricing[model.room]) {   
          model.sum = pricing[model.room] * days;
        }
      }
      else {
          model.sum = 'fill all the fields'
      }
    
}

//2020-09-01
//2020-09-07
