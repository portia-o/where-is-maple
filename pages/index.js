import React from "react";
import { useState } from "react";
import { whoIsMapleWith } from "../utils/date-utils";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import { Page } from "../components/Page";

// For testing
//const date = new Date("2022-01-15T11:00");

const today = moment();

export default function Home() {
  const [date, setDate] = useState(today);
  const { who } = whoIsMapleWith(date.toDate());
  const [focused, setFocused] = useState(false);

  return (
    <Page title="Where is Maple">
      <h1>
        where is maple on{" "}
        <SingleDatePicker
          readOnly
          date={date} // momentPropTypes.momentObj or null
          onDateChange={(date) => setDate(date)} // PropTypes.func.isRequired
          focused={focused} // PropTypes.bool
          onFocusChange={({ focused }) => setFocused(focused)} // PropTypes.func.isRequired
          id="your_unique_id" // PropTypes.string.isRequired,
          numberOfMonths="1"
        />{" "}
        ?
      </h1>
      <section>
        <span className="home__string">{who}'s</span>
      </section>
    </Page>
  );
}
