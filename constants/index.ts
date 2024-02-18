import { TableProps } from "antd";

export const trips: TripsTypes[] = [
  {id: "1", title: "Treehouse in India", description: "Perched atop a quaint hill, The Treehouse..." , price: "$450.0", img: "/trip1.jpg"},
  {id: "2", title: "View-Topia Treehouse", description: "Perched atop a quaint hill, The Treehouse..." , price: "$330.0", img: "/trip2.webp"},
  {id: "3", title: "Private room in treehouse", description: "Perched atop a quaint hill, The Treehouse..." , price: "$153.0", img: "/trip3.jpg"},
  {id: "4", title: "Tiny home in Siloti, India", description: "Perched atop a quaint hill, The Treehouse..." , price: "$450.0", img: "/trip4.webp"},
]

export const times: TimesTypes[] = [
    {id: "11", time: "7.15 AM", description: "2 days trip" , price: "$450.0"},
    {id: "12", time: "10.30 AM", description: "5 days trip" , price: "$330.0"},
    {id: "13", time: "8.30 AM", description: "3 days trip" , price: "$150.0"},
]

export const columns: TableProps<TableTypes>['columns'] = [
  {
    title: 'Trip Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Trip Description',
    dataIndex: 'desc',
    key: 'desc',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Time',
    key: 'time',
    dataIndex: 'time'
  },
  {
    title: 'Days',
    key: 'days',
    dataIndex: 'days'
  },
  {
    title: 'Price',
    key: 'price',
    dataIndex: 'price'
  },
];

export const blurImgLoader: string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOs3vnvPwAHHAMzTuqAzAAAAABJRU5ErkJggg=="