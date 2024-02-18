import { useContext, useState } from "react";
import { TripContext } from "@/store/store";
import { useRouter } from "next/navigation";
import { TimeContainer } from "@/styles";
import { times } from "@/constants";
import { Button, Typography } from "antd";

export default function TimePicker() {
    
  const [timeId, setTimeId] = useState<string>(undefined)
  const {dispatch} = useContext(TripContext);
  const router = useRouter()
  const { Text } = Typography;

  const updateTime = () => {
    dispatch({type: "Time", payload: timeId})
    router.push('/details')
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