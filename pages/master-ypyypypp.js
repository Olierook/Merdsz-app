import { getFirestore, setDoc, doc } from 'firebase/firestore'
import Head from 'next/head'
import Link from 'next/link'
import reactDom from 'react-dom';
import Button from '../components/Button';
import Clock from '../components/Clock';
import { useBlue, useDuration, useRed, useGreen, useRoundConfig, useTimestamp, useUpcomingTitle } from '../fetchData/index';
import TextInput from './../components/TextInput';

export default function Master() {


  const [duration, setDuration] = useDuration();
  const [timestamp, setTimestamp] = useTimestamp();

  const [roundConfig, setRoundConfig] = useRoundConfig();

  const [red, setRed] = useRed();
  const [blue, setBlue] = useBlue();
  const [green, setGreen] = useGreen();

  const [redTitle, setRedTitle] = useUpcomingTitle("red");
  const [blueTitle, setBlueTitle] = useUpcomingTitle("blue");
  const [greenTitle, setGreenTitle] = useUpcomingTitle("green");


  function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

  const refresh = () => {
      const now = new Date();
      const deadline = addMinutes(now, duration)
      const arr = [red, blue, green]
      arr.sort((a,b) => b.current - a.current)
      const winner = arr[0].title

      setTimestamp(deadline.getTime())
      setRoundConfig({...roundConfig, ["won-before"]: winner})
      setRed({...red, current: 0, title: red.upcoming, upcoming: ""})
      setGreen({...green, current: 0, title: green.upcoming, upcoming: ""})
      setBlue({...blue, current: 0, title: blue.upcoming, upcoming: ""})
  }

  return (
    <div className="container">

      <Head>
        <title>Merdsz Master</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Clock deadline={timestamp}/>
      <div className='push'/>
      <TextInput name="Rood: " value={redTitle} onChange={e => setRedTitle(e.target.value)}/>
      <TextInput name="Groen: " value={greenTitle} onChange={e => setGreenTitle(e.target.value)}/>
      <TextInput name="Blauw: " value={blueTitle} onChange={e => setBlueTitle(e.target.value)}/>

      {/* <TextInput name="Groen: " value={green?.upcoming} onChange={e => setGreen({...green, upcoming: e.target.value})}/>
      <TextInput name="Blauw: " value={blue?.upcoming} onChange={e => setBlue({...blue, upcoming: e.target.value})}/> */}
      <TextInput name="Rondeduur: " value={duration} onChange={e => setDuration(e.target.value)}/>
      <TextInput name="Now Playing: " value={roundConfig?.["won-before"]} onChange={e => setRoundConfig({...roundConfig, ["won-before"]: e.target.value})}/>
      <div className='centercontainer'>
        <Button onClick={refresh}> Volgende ronde </Button>
      </div>




      <style jsx global>
        {`
        body, html {
          background: #555;
          color: white;
          font-family: sans-serif;
        }
        button, input, div {
          padding: 15px;
        }
        .push {
          height: 40px;
        }
        *:focus {
            outline: none;
        }
        .centercontainer {
          display: flex;
          justify-content: center;
        }
    
        `}
        </style>
    </div>
  )
}
