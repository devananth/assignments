const addLeadingZeros = (n) => n.toString().padStart(2, "0");

const railwayFormat = (hrs, mins, secs) => {
  console.log(`${hrs}:${mins}::${secs}`);
};

const clockFormat = (hrs, mins, secs) => {
  let designation = "AM";

  if (hrs >= 12) {
    designation = "PM";
    if (hrs >= 13) {
      hrs = addLeadingZeros(hrs - 12);
    }
  }

  console.log(`${hrs}:${mins}::${secs} ${designation}`);
};

setInterval(() => {
  const date = new Date();
  const hrs = addLeadingZeros(date.getHours());
  const mins = addLeadingZeros(date.getMinutes());
  const secs = addLeadingZeros(date.getSeconds());
  railwayFormat(hrs, mins, secs);
  clockFormat(hrs, mins, secs);
}, 1000);
