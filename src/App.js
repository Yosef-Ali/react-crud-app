import { useState, useEffect, useCallback } from "react";
import { BiCalendar } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";

function App() {
  let [appointmentList, setAppointmentList] = useState([]);
  let [query, setQuery] = useState("");
  let [orderBy, setOrderBy] = useState("petName");
  let [sortBy, setSortBy] = useState("asc");

  const filterAppointments = appointmentList
    .filter((item) => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      );
    })
    .sort((a, b) => {
      let order = orderBy === "asc" ? 1 : -1;
      //return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
      return a[sortBy] < b[sortBy] ? -1 * order : 1 * order;
    });

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
    <div className="container max-w-lg p-5 mx-auto mt-3 font-thin bg-gray-100">
      <h1 className="mb-5 text-5xl">
        <BiCalendar className="inline-block text-red-400 align-top" />
        Your Appointment
      </h1>
      <AddAppointment />
      <Search
        query={query}
        onQueryChange={(myQuery) => setQuery(myQuery)}
        orderBy={orderBy}
        onOrderByChange={(mySort) => setOrderBy(mySort)}
        sortBy={sortBy}
        onSortByChange={(mySort) => setSortBy(mySort)}
      />
      <ul className="divide-y divide-gray-200">
        {filterAppointments.map((appointment) => (
          <AppointmentInfo
            appointment={appointment}
            key={appointment.id}
            onDeleteAppointment={(appointmentId) =>
              setAppointmentList(
                filterAppointments.filter(
                  (appointment) => appointment.id !== appointmentId
                )
              )
            }
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
