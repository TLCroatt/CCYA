import moment from "moment";


export default [
    {
      start: new Date(),
      end: new Date().setDate(new Date().getDate() + 1),
      title: "Some title"
    },
    {
      start: new Date(),
      end: moment()
        .add(2, "days")
        .toDate(),
      title: "Softball Game"
    },
    {
      start: new Date(2021, 2, 12),
      end: new Date(2021, 2, 13),
      title: "Tournament",
      allDay: true,
    },
    {
        start: new Date(2020, 10, 30, 13, 0),
        end: new Date(2020, 10, 30, 14, 0),
        title: "Eagles",
        // desc: 'Pre-meeting meeting, to prepare for the meeting',
      },
      {
        id: 7,
        title: 'Lunch',
        start: new Date(2020, 3, 12, 12, 0, 0, 0),
        end: new Date(2020, 3, 12, 13, 0, 0, 0),
      },
  ]

