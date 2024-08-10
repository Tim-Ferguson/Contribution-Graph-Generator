// Test the function
const year = 2023; // Change the year as needed
const contributionLevels = [
  "contributions-level-invalid",
  "contributions-level-1",
  "contributions-level-2",
  "contributions-level-3",
  "contributions-level-4",
  "contributions-level-5"
];

function getAllDaysInYear(year) { //returns an array of all days in year. -1 in the array indicates a day needed for colun building that is pre Jan 1 or Post Dec 31
  const daysInYear = [];
  const startDate = new Date(year, 0, 1);
  const endDate = new Date(year, 11, 31);
  const startDoW = startDate.getDay();
  const endDoW = endDate.getDay();
  // Find the first Sunday of the year
  const firstDayOfYear = new Date(startDate);
  firstDayOfYear.setDate(1);
  /*while (firstDayOfYear.getDay() !== 0) {
      const dateString = firstDayOfYear.toISOString();
      ///daysInYear.push({ dateString, Id: -1 });
      daysInYear.push({Id: -1 });
      firstDayOfYear.setDate(firstDayOfYear.getDate() + 1);
  }*/

  for(var i = 0; i < startDoW; i++){
  	daysInYear.push(-1);
  }
  // Iterate through each day of the year
  const currentDate = new Date(startDate);
  let dayOfYear = 1;
  while (currentDate <= endDate) {
    const dateString = currentDate.toISOString();
    //daysInYear.push({ dateString, Id: dayOfYear });
    daysInYear.push(dayOfYear);
    currentDate.setDate(currentDate.getDate() + 1);
    dayOfYear++;
  }

  // Find the last day of the year and check if it's a Saturday
    for(var i = endDoW; i < 6; i++){
  	daysInYear.push(-1);
  }
  
  return daysInYear;
}

// Test the function

const data  = getAllDaysInYear(year);

  function getColorClass(value) {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    if (value === -1) return 'contributions-level-invalid';
    return contributionLevels[randomNumber]
}

  // Create contribution squares
  const container = document.getElementById('contribution-graph');
  let columnIndex = 0;
  let rowIndex = 0;
 
function handleBoxClick(event){
  currentClass = this.classList.value;
  currValue = currentClass.slice(-1);
  if(currValue >4){
    currValue = 1;
  }
  else{
    currValue++;
  }
  this.classList.remove(...this.classList);
  this.classList.add('contribution-square', contributionLevels[currValue]);
};

	for(var i = 0; i < 53; i++){
  	const col = document.createElement('div');
    col.classList.add('contribution-week');
  	for(var j = 0; j< 7; j++){
    	const value = data[(i*7)+j];
			col.classList.add('contribution-week');
    	container.appendChild(col)
    	const square = document.createElement('div');
    	square.classList.add('contribution-square', getColorClass(value));
      square.addEventListener('click', handleBoxClick, false);
      col.appendChild(square); 
    }
    container.appendChild(col);
    //console.log("added col")
  } 

