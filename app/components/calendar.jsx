import Cal from "@calcom/embed-react";

const Calendar = () => (
  <div className="calendar-container">
    <Cal
      calOrigin="https://cal.com"
      embedJsUrl="https://cal.com/embed/embed.js"
      calLink="alexboutoille"
    />
  </div>
);

export default Calendar;
