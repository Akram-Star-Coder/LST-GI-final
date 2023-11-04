import React , {useState, useEffect} from 'react'
import './index.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';


const PartOne = () => {

  
  const examDate = new Date('2024-01-01').getTime();
  const currentDate = new Date().getTime();
  const timeLeft = examDate - currentDate;

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const updatedTime = new Date().getTime();
      const timeRemaining = examDate - updatedTime;

      if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
      } else {
        const daysLeft = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesLeft = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setDays(daysLeft);
        setHours(hoursLeft);
        setMinutes(minutesLeft);
        setSeconds(secondsLeft);
      }
    }, 0);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [examDate]);



  return (
    <>
    <div className='PartOne'>
      <span>Bienvenue</span> 👋
      <br />Trouvez ici tous les documents essentiels, sans avoir à attendre pendant des heures.
      <br /><span className='spanish'>Restez à jour!</span>
    </div>
    <div className="partTwo">
      <div className="caseOne">
        <div className="caseClock">
          <img src="https://icones.pro/wp-content/uploads/2021/03/icone-d-horloge-rouge.png" alt="" />
        </div>
        <div className="examcountdown">
          <div className="casex">
            Exams Countdown
          </div>
          <div className="casey">
          {timeLeft > 0 ? (
            <div>
              <span>{`${days} `}<span>days</span></span> &nbsp;
              <span>{`${hours} `}<span>hours</span></span>&nbsp;
              <span>{`${minutes} `}<span>min</span></span>&nbsp;
              <span>{`${seconds} `}<span>s</span></span>
            </div>
          ) : (
            <div>Exam time has arrived!</div>
          )}
          </div>
        
        </div>
      </div>
    </div>
    </>
  )
}

export default PartOne