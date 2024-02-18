import { useContext, useState } from "react";
import { TripContext } from "@/store/store";
import { Button, Calendar } from "antd";
import type { Dayjs } from 'dayjs';

export default function DatePicker() {

  const [date, setDate] = useState<string>("")
  const {dispatch} = useContext(TripContext);

  const onChange = (value: Dayjs) => {
    setDate(value.format('YYYY-MM-DD'))
  };

  const updateDate = () => {
    dispatch({type: "Date", payload: date})
    dispatch({type: "Tab", payload: "Time"})
  }
  
  return <>
          <Calendar className="mt1" fullscreen={false} onChange={onChange} />
          <Button type="primary" className="fullWidth mt1" disabled={date === ""}
          onClick={updateDate}>
            Choose a Time
          </Button>
        </>
}