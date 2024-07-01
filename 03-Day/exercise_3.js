// 1
let isDateFormatVisible = false;
let intervalId;

function dateFormat(){
  let YYYY = new Date().getFullYear()
  let MM = new Date().getMonth() +1
  let DD = new Date().getDate()
  let HH = new Date().getHours()
  let mm = new Date().getMinutes()
  let sec= new Date().getSeconds()

  MM = MM < 10 ? '0' + MM : MM
  DD = DD < 10 ? '0' + DD : DD
  HH = HH < 10 ? '0' + HH : HH
  mm = mm < 10 ? '0' + mm : mm
  sec = sec < 10 ? '0' + sec : sec

  const formattedDate = `${YYYY}-${MM}-${DD} ${HH}:${mm}:${sec}`;

  document.getElementById('date-output').innerText = formattedDate;

}

function toggleDateFormat() {
  const dateOutput = document.getElementById('date-output');

  if (isDateFormatVisible) {
    clearInterval(intervalId);
    dateOutput.style.display = 'none';
  } else {
    dateFormat(); // Update immediately on first click
    intervalId = setInterval(dateFormat, 1000); // Update every 10 seconds
    dateOutput.style.display = 'block';
  }

  isDateFormatVisible = !isDateFormatVisible;
}
