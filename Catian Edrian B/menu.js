function menuAction(choice) {
  switch (choice) {
    case "10":
      return "Add a new record";

    case "20":
      return "View all records";

    case "30":
      return "Update a record";

    case "40":
      return "Delete a record";

    case "99":
      return "Exit the program";

    default:
      return "Invalid Option - please choose 10, 20, 30, 40 or 99";
  }
}

console.log(menuAction("10")); // Add a new record
console.log(menuAction("20")); // View all records
console.log(menuAction("30")); // Update a record
console.log(menuAction("40")); // Delete a record
console.log(menuAction("99")); // Exit the program
console.log(menuAction("1"));  // Invalid Option - please choose 10, 20, 30, 40 or 99