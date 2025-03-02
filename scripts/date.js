const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const today = new Date();

const day = today.getDay();
const formattedDay = String(`${days[day]} ,`)

document.getElementById('date-day').textContent = formattedDay;

const month = today.getMonth();
const date = today.getDate();
const year = today.getFullYear();

const formattedFullDate = `${months[month]} ${date} ${year}`;
document.getElementById('date-full').textContent = formattedFullDate;