import { Skeleton } from "antd";

export default function SkeletonLoader() {
    return <div>
            {[...new Array(3)].map((_it,i) => {
                return <Skeleton.Button block key={i} active style={{height: 110, marginBottom: 10}} />
            })}
            </div>
  }