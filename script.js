//your JS code here. If required.
// Utility to delay with a Promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main function to handle the chained transformations
function processArray() {
  // Initial Promise that resolves after 3 seconds with [1, 2, 3, 4]
  new Promise(resolve => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  })
  .then(async (array) => {
    // Filter even numbers
    const evens = array.filter(num => num % 2 === 0);
    await delay(1000); // Wait 1 second
    document.getElementById("output").textContent = evens.join(",");
    return evens;
  })
  .then(async (evens) => {
    // Multiply even numbers by 2
    const doubled = evens.map(num => num * 2);
    await delay(2000); // Wait 2 seconds
    document.getElementById("output").textContent = doubled.join(",");
  });
}

// Start processing when the page loads
window.onload = processArray;
