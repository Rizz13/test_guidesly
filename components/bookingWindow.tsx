"use client";
import { times, trips } from "@/constants";
import { TimeContainer, TripContainer, WindowContainer } from "@/styles";
import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Calendar, Typography } from "antd";
import { CoverImage } from "./coverImage";
import { useContext, useEffect, useState } from "react";
import type { Dayjs } from 'dayjs';
import { TripContext } from "@/store/store";
import { useRouter } from "next/navigation";
const { Text, Title } = Typography;

export default function BookingWindow({closeWindow}: BookingWindowTypes) {

  const [tabs, setTabs] = useState<TabList>("Trip")
  const {state: {activeTab}, dispatch} = useContext(TripContext);

  useEffect(()=> {
    if(activeTab){
      setTabs(activeTab)
    }
  }, [activeTab])

  useEffect(()=> {
    // Clear Tab history
    return () => {
      dispatch({type: "ReSetTab"})
    }
  },[])

  const tabData = (tabs: TabList) => {
    switch (tabs) {
      case "Trip":
        return <TripContent />
      case "Date":
        return <DatePicker />
      case "Time":
        return <TimePicker />
      default:
        break;
    }
  }

  return (
    <WindowContainer>
      <Title level={5}>Choose A {tabs}</Title>
      <Button className="closeIcon" type="text" icon={<CloseCircleOutlined />} onClick={closeWindow} />
      <div className="container">
        {tabData(tabs)}
      </div>
    </WindowContainer>
  )
}

export function TripContent() {

  const {dispatch} = useContext(TripContext);

  const updateTrip = (payload) => {
    dispatch({type: "Trip", payload})
    dispatch({type: "Tab", payload: "Date"})
  }

  return <>
          {trips.map((it) => {
            return <TripContainer key={it.id} onClick={()=>updateTrip(it.id)}>
                      <CoverImage photoUrl={it.img} width={100} height={100} alt={it.title} />
                      <div className="infoSec">
                        <Text>{it.title}</Text>
                        <Text type="secondary">{it.description}</Text>
                        <Text>From: {it.price}</Text>
                      </div>
                    </TripContainer>
          })}
        </>
}

export function DatePicker() {

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

export function TimePicker() {

  const [timeId, setTimeId] = useState<string>(undefined)
  const {dispatch} = useContext(TripContext);
  const router = useRouter()

  const updateTime = () => {
    dispatch({type: "Time", payload: timeId})
    router.push('/dashboard')
  }

  return <>
          <TimeContainer className="mt1">
            {times.map((it) => {
              return <div key={it.id} className={"timeSection"+((timeId === it.id) ? " active" : "")}
                      onClick={()=>setTimeId(it.id)}>
                      <Text>{it.time}</Text>
                      <Text>{it.description}</Text>
                      <Text className="price">{it.price}</Text>
                    </div>
            })}
          </TimeContainer>
          
          <Button type="primary" className="fullWidth mt1" disabled={timeId === undefined}
          onClick={updateTime}>
            Choose a Guide
          </Button>
        </>
}