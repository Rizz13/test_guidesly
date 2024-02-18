"use client";
import { columns, times, trips } from "@/constants";
import { TripContext } from "@/store/store";
import { Table, Typography } from "antd";
import { useContext, useEffect, useState } from "react";

export default function TripDetails() {
  const [tableData, setTableData] = useState<TableTypes[]>()
  const {state} = useContext(TripContext);
  const { Title } = Typography;

  useEffect(()=> {
    const {date, tripId, tripTimeId} = state
    const tripDetails = trips.find(it => it.id === tripId)
    const tripTime = times.find(it => it.id === tripTimeId)
    if(tripDetails && tripTime){
      const bookDetails = {
        key: '1',
        title: tripDetails.title,
        desc: tripDetails.description,
        date,
        time: tripTime.time,
        days: tripTime.description,
        price: tripTime.price,
      }
      setTableData([bookDetails])
    }
  }, [state, trips, times])

  return (
    <div className="container">
      <Title level={4} className="mt1">Booking Details</Title>
      <Table className="mt1" columns={columns} dataSource={tableData} />
    </div>
  )
}