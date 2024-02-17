interface TripsTypes {
    title: string
    description: string
    price: string
    img: string
    id: string
}

interface BookingWindowTypes {
    closeWindow: () => void;
}

interface CoverImageTypes {
    photoUrl: string
    width: number
    height: number
    alt: string
}

type TabList = "Trip" | "Date" | "Time"

interface TimesTypes{
    time: string
    description: string
    price: string
    id: string
}

interface ActionType{
    type: string
    payload: string
}

interface IntialStateTypes{
    tripId: string,
    date: string,
    tripTimeId: string,
    activeTab: TabList
}