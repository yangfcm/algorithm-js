/**
 * @name fradulentActivityNotice
 * @description Assume a bank has a simple policy for warning clients about possible fradulate account activity.
 * If the amount spent by a client on a particular day is greater than or equal to the client's median spending for a trailing number of days,
 * they send the client a notification about potential fraud.
 * The bank doesn't send the client any notifications until they have at least that trailing number of prior days' transaction data.
 * Given the number of trailing days *d* and a client's total daily expenditures for a period of *n* days,
 * determine the number of times the client will receive a notification over all *n* days.
 * @example expenditure = [10, 20, 30, 40, 50] d = 3, fradulentActivityNotice(expenditure, d) -> 1.
 * As d = 3, on the first 3 days, it just collects data. On day 4, trailing 3 days expenditures are [10, 20, 30].
 * The median is 20 and D4's expenditure is 40. Because 40 >= 20 * 2, client will get a notification.
 * Then on day 5, trailing 3 days expenditures are [20, 30, 40]. The median is 30 and D5's expenditure is 50.
 * Because 50 < 30 * 2, client will not get a notification on that day.
 * So, there will be 1 notification sent.
 * @param {array} expenditure An array that represents how much is spent for consecutive days.
 * @param {number} d From which day, notification is started.
 * @returns {number} How many notifications are triggered.
 * @solution Use the idea of counting sort.
 * Since you need to find out the median number in trailing n days, imagine there's a time window with width of d sliding along the array.
 * Use the example: expenditure = [10, 20, 30, 40, 50] d = 3.
 * |10, 20, 30|, 40, 50
 * 10, |20, 30, 40|, 50
 * 10, 20, |30, 40, 50|
 * You need to find out the median number in this time window.
 * You don't need to really sort it and then get median number as it is time-consuming.
 * Just use the idea of counting sort to find out the number in the middle position.
 * @source https://www.hackerrank.com/challenges/fraudulent-activity-notifications
 */
function fradulentActivityNotice(expenditure, d) {
  let notificationCount = 0;
  let max = expenditure[0];
  for (let el of expenditure) {
    // Find the max number.
    if (el > max) max = el;
  }
  const countArr = new Array(max + 1).fill(0); // Initialize count array.

  for (let i = 0; i < d; i++) {
    // Fill part of count array.
    countArr[expenditure[i]]++;
  }
  for (let i = d; i < expenditure.length; i++) {
    const median = getMedian(d, countArr);
    if (expenditure[i] >= median) notificationCount++;

    // Update count table
    countArr[expenditure[i - d]]--;
    countArr[expenditure[i]]++;
  }
  return notificationCount;
}

function getMedian(d, count) {
  // It actually returns median * 2.
  let median = 0; // The median number to return.
  const countArr = [...count];
  for (let i = 1; i < countArr.length; i++) {
    countArr[i] += countArr[i - 1];
  }

  if (d % 2 === 0) {
    const m1 = d / 2;
    const m2 = d / 2 + 1;
    for (let i = 0; i < countArr.length; i++) {
      if (m1 <= countArr[i]) {
        median += i;
        break;
      }
    }

    for (let i = 0; i < countArr.length; i++) {
      if (m2 <= countArr[i]) {
        median += i;
        break;
      }
    }
  } else {
    const m = (d + 1) / 2;
    for (let i = 0; i < countArr.length; i++) {
      if (m <= countArr[i]) {
        median = i * 2;
        break;
      }
    }
  }
  return median;
}
module.exports = fradulentActivityNotice;
