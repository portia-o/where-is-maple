import getWeekfn from "date-fns/getWeek";
import getYear from "date-fns/getYear";

export function whoIsMapleWith(date) {
  const week = getWeekfn(date, {
    weekStartsOn: 1,
  });
  let who;

  if (getYear(date) === 2021) {
    if (week % 2 === 1) {
      who = "dad";
    } else {
      who = "mom";
    }

    // 2021 special case handling
    if (week === 52) {
      who = "dad";
    }
    // 2022 weeks
  } else {
    if (week % 2 === 0) {
      who = "dad";
    } else {
      who = "mom";
    }
  }

  // special case
  //if (week === 9) {
  //  who = "mexico";
  //}

  return { who };
}
