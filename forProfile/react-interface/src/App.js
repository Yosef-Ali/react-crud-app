import { useState, useEffect, useCallback } from "react";
import { BiCalendar } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";

function App() {
  let [appointmentList, setAppointmentList] = useState([]);

  const fetchData = useCallback(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        setAppointmentList(data);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="container mx-auto max-w-lg mt-3 font-thin">
      <h1 className="text-5xl mb-5">
        <BiCalendar className="inline-block text-red-400 align-top" />
        Your Appointment
      </h1>
      <AddAppointment />
      <Search />
      <ul className="divide-y divide-gray-200">
        {appointmentList.map((appointment) => (
          <AppointmentInfo appointment={appointment} key={appointment.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;
