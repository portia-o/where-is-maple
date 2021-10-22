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
  } else {
    if (week % 2 === 0) {
      who = "dad";
    } else {
      who = "mom";
    }
  }
  return { who };
}
