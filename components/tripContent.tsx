import { trips } from "@/constants";
import { TripContext } from "@/store/store";
import { TripContainer } from "@/styles";
import { useContext } from "react";
import { CoverImage } from "./coverImage";
import { Typography } from "antd";

export default function TripContent() {
  
  const {dispatch} = useContext(TripContext);
  const { Text } = Typography;

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