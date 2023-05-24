import Cal from "@calcom/embed-react";

const Calendar = () => (
  <div className="calendar-container">
    <div className="window">
      <Cal
        calOrigin="https://cal.com"
        embedJsUrl="https://cal.com/embed/embed.js"
        calLink="alexboutoille"
      />
    </div>
  </div>
);

export default Calendar;
