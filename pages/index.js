import React from "react";
import { Number } from "../components/Number";
import { useCountdown } from "../utils/date-utils";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import { Page } from "../components/Page";

// For testing
//const date = new Date("2022-01-15T11:00");

const today = moment();

export default function Home() {
  const { days, hours, minutes, seconds } = useCountdown(
    new Date("2023-12-20T11:11-08:00")
  );

  return (
    <Page title="Countdown to Seattle">
      <h1>Maple comes home in</h1>
      <section>
        <Number number={days} />
        <span className="home__unit">d</span>
        <Number number={hours} />
        <span className="home__unit">h</span>
        <Number number={minutes} />
        <span className="home__unit">m</span>
        <Number number={seconds} />
        <span className="home__unit">s</span>
      </section>
    </Page>
  );
}
