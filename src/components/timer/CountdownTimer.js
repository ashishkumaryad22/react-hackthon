import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import useCountdown from "./useCountdown";

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <div className="countdown-link">
        <DateTimeDisplay value={days} type={"DD"} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Hr"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Min"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Sec"} isDanger={false} />
      </div>
    </div>
  );
};

const CountdownTimer = (props) => {
  //
  const [days, hours, minutes, seconds] = useCountdown(props.targetDate);
  // console.log(setExpTimer);
  if (days + hours + minutes + seconds <= 0) {
    props.setExpTimer(false);
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
