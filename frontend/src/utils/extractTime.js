export function extractTime(dateString) {
	const date = new Date(dateString);
	let hours = date.getHours();
	const minutes = padZero(date.getMinutes());
	const period = hours >= 12 ? 'PM' : 'AM';
  
	hours = hours % 12 || 12; // Convert to 12-hour format, ensuring 0 becomes 12
	hours = padZero(hours);
  
	return `${hours}:${minutes} ${period}`;
  }
  
  // Helper function to pad single-digit numbers with a leading zero
  function padZero(number) {
	return number.toString().padStart(2, "0");
  }
  