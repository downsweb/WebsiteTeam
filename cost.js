function calculateCost() {
    const houseSizeInput = document.getElementById("house-size");
    const resultContainer = document.getElementById("result");
    const cleaningRequirementsSelect = document.getElementById("cleaning-requirements");

    //cost per square foot is $7
    const costPerSquareFoot = 7;

    // Getting the house size value entered by the user
    const houseSize = parseFloat(houseSizeInput.value);

    // Checking if the entered value is a valid number
    if (isNaN(houseSize)) {
      resultContainer.textContent = "Please enter a valid number.";
      return;
    }

    // Calculating total cost
    const baseCost = houseSize * costPerSquareFoot;

    // Getting the selected cleaning requirements
    const selectedRequirements = Array.from(cleaningRequirementsSelect.selectedOptions).map(option => option.value);

    // Variables and associated costs for cleaning requirements
    const variables = {
      kitchen: 50,
      backyard: 100,
      room: 30,
      bathroom: 40
    };

    // Parsing and calculating the total cost for cleaning requirements
    let totalCost = baseCost;
    selectedRequirements.forEach(requirement => {
      if (variables.hasOwnProperty(requirement)) {
        totalCost += variables[requirement];
      }
    });

    // Displaying the estimated cost with cleaning requirements
    resultContainer.textContent = "Estimated cost for cleaning " + selectedRequirements.join(", ") + ": $" + totalCost;
  }