import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import './bootcamp.css';

export default function Bootcamp() {
  const [joke, setJoke] = useState({});
  const [time, setTime] = useState(new Date());

  async function fetchJoke() {
    try {
      const { data } = await axios.get(`https://api.chucknorris.io/jokes/random`);
      setJoke(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  setInterval(() => {
    setTime(new Date());
  }, 1000);

  const refreshJoke = () => {
    fetchJoke();
  }

  return (
    <div>
      <Card className='card'>
        <Card.Body>
          <Card.Title>Joke of the day</Card.Title>
          <div className="joke_container">
            {joke.value}
          </div>
          <div className="refresh_button">
            <Button variant="primary" onClick={refreshJoke}>Refresh</Button>
          </div>
        </Card.Body>
      </Card>
      <Card className='card'>
        <Card.Body>
          <Card.Title>Timer</Card.Title>
          <div className="Timer_container">
            Current Time:  {time.toString()}
          </div>

        </Card.Body>
      </Card>
    </div>
  )
}
