"use client";
import { WindowContainer } from "@/styles";
import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Typography } from "antd";
import { useContext, useEffect, useState } from "react";
import { TripContext } from "@/store/store";
import dynamic from "next/dynamic";
import SkeletonLoader from "./skeletonLoader";

const TripContent = dynamic(() => import('./tripContent'), 
{ loading: () => <SkeletonLoader />, ssr: false })
const DatePicker = dynamic(() => import('./datePicker'), 
{ loading: () => <SkeletonLoader />, ssr: false })
const TimePicker = dynamic(() => import('./timePicker'), 
{ loading: () => <SkeletonLoader />, ssr: false })

export default function BookingWindow({closeWindow}: BookingWindowTypes) {
  
  const [tabs, setTabs] = useState<TabList>("Trip")
  const {state: {activeTab}, dispatch} = useContext(TripContext);
  const { Title } = Typography;

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
      <div className="tripContainer">
        {tabData(tabs)}
      </div>
    </WindowContainer>
  )
}