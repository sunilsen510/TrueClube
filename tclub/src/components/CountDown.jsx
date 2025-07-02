import React, { useEffect, useState } from "react";

const CountdownTimer = ({
  bgColor = "#ffffff",
  textSize = "text-[16px]",
  padding = "py-[12px] px-[12px]",
  width = "w-[53px]",
  height = "h-[53px]",
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("August 30, 2025  13:05:40").getTime();
    const controller = new AbortController();

    const animationInterval = (ms, signal, callback) => {
      const start = performance.now();

      const frame = (time) => {
        if (signal.aborted) return;
        callback(time);
        scheduleFrame(time);
      };

      const scheduleFrame = (time) => {
        const elapsed = time - start;
        const roundedElapsed = Math.round(elapsed / ms) * ms;
        const targetNext = start + roundedElapsed + ms;
        const delay = targetNext - performance.now();
        setTimeout(() => requestAnimationFrame(frame), delay);
      };

      scheduleFrame(start);
    };

    animationInterval(1000, controller.signal, () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        controller.abort();
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    });

    return () => controller.abort();
  }, []);

  return (
 
      <div className="mb-[10px]">
        <div className="flex items-center justify-center gap-[4px] md:gap-[4px] clock-container">
          {["days", "hours", "minutes", "seconds"].map((label, idx) => (
            <React.Fragment key={label}>
              <div
                 className={`flex items-center flex-col justify-center rounded-lg ${padding} ${width} ${height}`}
                style={{ backgroundColor: bgColor }}
                data-label={label}
              >
                <b className={`${textSize} text-[var(--text-primary)] font-semibold`}>
                  {timeLeft[label]}
                </b>
                <span className="text-[10px] font-normal text-[#40658B]">
                  {label.charAt(0).toUpperCase() + label.slice(1)}
                </span>
              </div>
              {idx !== 3 && (
                <span className="text-xl text-[var(--text-primary)] font-semibold">
                  :
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

  );
};

export default CountdownTimer;
