import Head from 'next/head'
import Chart from '../components/Chart';
import Clock from '../components/Clock';
import { useBlue, useDuration, useRed, useGreen, useRoundConfig, useTimestamp } from './../fetchData/index';

export default function Home() {

  const [duration, setDuration] = useDuration();
  const [timestamp, setTimestamp] = useTimestamp();

  const [roundConfig, setRoundConfig] = useRoundConfig();

  const [red, setRed] = useRed();
  const [blue, setBlue] = useBlue();
  const [green, setGreen] = useGreen();



  return (
    <div className="container">
      <Head>
        <title>Merdsz App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Clock deadline={timestamp}/>
      <div className='push'/>
      <div className='sub-container'>
      <Chart red={red} green={green} blue={blue} nowPlaying={roundConfig?.["won-before"]}/>
      </div>

      <style jsx global>
        {`
        body, html {
          background: #555;
          font-family: sans-serif;
          color: white;

        }
        .push {
          height: 60px;
        }
        *:focus {
            outline: none;
        }

        `}
        </style>
        {/* <style jsx>
          { ` 
          .container {
            display: flex;
            justify-content: center;
            height: 100vh;
          }
          .sub-container {
            margin-top: 60px;
            max-width: 170vh;
          }


          `}
        </style> */}
    </div>
  )
}
