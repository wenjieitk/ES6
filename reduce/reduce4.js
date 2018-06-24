var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];
  
  var deskTypes = desks.reduce(function(previous, desk) {
      previous[desk.type]++;
      return previous;
  }, { sitting: 0, standing: 0 });

  console.log(deskTypes);