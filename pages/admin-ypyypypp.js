import { getFirestore, setDoc, doc } from 'firebase/firestore'
import Head from 'next/head'
import Link from 'next/link'
import Button from '../components/Button';
import ButtonGrid from '../components/ButtonGrid';
import Chart from '../components/chart';
import Clock from '../components/Clock';
import { useBlue, useDuration, useRed, useGreen, useRoundConfig, useTimestamp, useCount } from './../fetchData/index';

export default function Admin() {

  const [duration, setDuration] = useDuration();
  const [timestamp, setTimestamp] = useTimestamp();

  const [roundConfig, setRoundConfig] = useRoundConfig();

  const [red, setRed] = useCount("red");
  const [blue, setBlue] = useCount("blue");
  const [green, setGreen] = useCount("green");

  const increment = (get, set, amount) => () => {
    set((get || 0) + amount);
  }


  const refresh = () => {
      setTimestamp(Date.now())
  }
  return (
    <div className="container">

      <Head>
        <title>Merdsz Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Clock deadline={timestamp}/>
        <ButtonGrid>
            <Button onClick={increment(red, setRed, 25)} margin="2px" color="red">+25</Button>
            <Button onClick={increment(green, setGreen, 25)} margin="2px" color="green">+25</Button>
            <Button onClick={increment(blue, setBlue, 25)} margin="2px" color="blue">+25</Button>
            <Button onClick={increment(red, setRed, 5)} margin="2px" color="red">+5</Button>
            <Button onClick={increment(green, setGreen, 5)} margin="2px" color="green">+5</Button>
            <Button onClick={increment(blue, setBlue, 5)} margin="2px" color="blue">+5</Button>
            <Button onClick={increment(red, setRed, 1)} margin="2px" color="red">+1</Button>
            <Button onClick={increment(green, setGreen, 1)} margin="2px" color="green">+1</Button>
            <Button onClick={increment(blue, setBlue, 1)} margin="2px" color="blue">+1</Button>
            <Button margin="2px" >{red}</Button>
            <Button margin="2px" >{green}</Button>
            <Button margin="2px" >{blue}</Button>

            <Button onClick={increment(red, setRed, -1)} margin="2px" color="red">-1</Button>
            <Button onClick={increment(green, setGreen, -1)} margin="2px" color="green">-1</Button>
            <Button onClick={increment(blue, setBlue, -1)} margin="2px" color="blue">-1</Button>
            <Button onClick={increment(red, setRed, -5)} margin="2px" color="red">-5</Button>
            <Button onClick={increment(green, setGreen, -5)} margin="2px" color="green">-5</Button>
            <Button onClick={increment(blue, setBlue, -5)} margin="2px" color="blue">-5</Button>
            <Button onClick={increment(red, setRed, -25)} margin="2px" color="red">-25</Button>
            <Button onClick={increment(green, setGreen, -25)} margin="2px" color="green">-25</Button>
            <Button onClick={increment(blue, setBlue, -25)} margin="2px" color="blue">-25</Button>

        </ButtonGrid>


      <style jsx global>
        {`
        body, html {
          background: #555;
          color: white;
          font-family: sans-serif;
        }
        *:focus {
            outline: none;
        }
        `}
        </style>
    </div>
  )
}
