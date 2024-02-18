import { useEffect, useState } from "react";

export default function useCallback() {
  const [time, setTime] = useState(0)
  const [date, setDate] = useState()

  useEffect(() => {
    async function changeDate() {
      const date = await externalGetDate()
      setDate(date)
    }

    changeDate()
  }, [time])

  return (
    <div>
      <p>Hora no tempo {time}: {date}</p>
      <button onClick={() => setTime(time + 1)}>Next</button>
    </div>
  )
}

async function externalGetDate() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Date().toUTCString())
    }, 2000);
  })
}