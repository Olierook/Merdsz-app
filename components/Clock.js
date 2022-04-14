import { useState, useEffect } from 'react';

const Clock = ({deadline}) => {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const showClockStyle = (number, last = false) => {
        const suffix = last ? "" : ":"
        if (number > 9) {
            return number + suffix
        }
        if (number > 0) {
            return "0" + number + suffix
        }
        return ""
    }

    useEffect(() => {
        const x = setInterval(() => {
            const now = new Date().getTime();
          
            // Find the distance between now and the count down date
            const distance = deadline - now;
          
            // Time calculations for days, hours, minutes and seconds
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
          
          
            if (distance < 0) {
              clearInterval(x);
            }
          }, 1000);

      return () => {
        clearInterval(x);
      }
    }, [deadline])
    



  return (
    <div>{showClockStyle(hours)}{showClockStyle(minutes)}{showClockStyle(seconds, true)}
        <style jsx>
            {`
              div {
                  font-size: 51px;
                  position: absolute;
                  left: 50%;
                  transform: translateX(-50%);
                  margin: 0;
                  padding: 0;
                  }

            `}
        </style>
    </div>
  )
}

export default Clock