const myBinder = {
  bind: function(selector, model, fieldName) {
    const item = document.querySelector(selector);
    
    item.addEventListener("input", e => {
      model[fieldName] = e.target.value;
    });

    let fieldValue = model[fieldName];
    Object.defineProperty(model, fieldName, {
      set: val => {          
        fieldValue = val;
        item.value = val;
      },
      get: () => {   
        return fieldValue;
      }
    });
  }
};
