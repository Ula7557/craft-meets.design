import { useEffect, useState } from "react";
import "./calendar.scss";
import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import GetData from "../../hooks/getData";

const Calendar = ({ setSelectedDay }) => {
  const [state, setState] = useState({
    currentMonth: new Date(),
    selectedDate: new Date(),
  });
  console.log(state);
  const [events, setEvents] = useState([]);
  const [loading, data] = GetData(`/v1/events`);
  useEffect(() => {
    if (!loading && data.data?.length > 0) {
      let eventdate = data.data.map((el) => el.begin_date_time);
      for (let event of eventdate) {
        events.push(new Date(event).getDate());
      }
      setEvents(events);
    }
  }, [loading, data.data]);
  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";
    return (
      <div className={"header row flex-middle"}>
        <div className="col col-start">
          <div className="icon" onClick={prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{format(state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  };
  const renderDays = () => {
    const dateFormat = "EEEEEE";
    const days = [];
    let startDate = startOfWeek(state.currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <p className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </p>
      );
    }
    return <div className="days row">{days}</div>;
  };
  const renderCells = () => {
    const { currentMonth, selectedDate } = state;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formatedDate = "";
    const d = new Date();
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formatedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }
                      ${isSameDay(day, d) ? "today" : ""}
                      ${
                        events.some((el) => el == formatedDate) ? "event" : ""
                      }`}
            key={day}
            onClick={(e) => {
              onDateClick(cloneDay);
              setSelectedDay({
                day: e.target.querySelector(".number")?.textContent
                  ? e.target.querySelector(".number")?.textContent
                  : e.target.textContent,
                month: state.currentMonth.getMonth() + 1,
                year: format(state.currentMonth, "yyyy"),
              });
            }}
          >
            <span className="number">{formatedDate}</span>
            <span className="bg">{formatedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className={"row flex"} key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className={"extra"}>{rows}</div>;
  };
  const onDateClick = (day) => {
    setState({
      ...state,
      selectedDate: day,
    });
  };
  const nextMonth = () => {
    setState({
      ...state,
      currentMonth: addMonths(state.currentMonth, 1),
    });
  };
  const prevMonth = () => {
    setState({
      ...state,
      currentMonth: subMonths(state.currentMonth, 1),
    });
  };

  if (loading) return <>Loading</>;

  return (
    <div className={"customCalendar"}>
      <div className="calendar">
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>
    </div>
  );
};
export default Calendar;
