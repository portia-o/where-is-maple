import { Number } from "../components/Number";
import { useCountdown } from "../utils/date-utils";
import { Page } from "../components/Page";

// For testing
//const date = new Date("2022-01-15T11:00");

export default function Home() {
  const { days, hours, minutes, seconds } = useCountdown(
    new Date("2025-09-15T11:00-08:00")
  );

  return (
    <Page title="Maple's Countdown">
      <h1>Maple moves to Olympia in</h1>
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
