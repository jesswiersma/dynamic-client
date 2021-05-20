import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import { darken, fade, lighten } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import classNames from 'clsx';
import {
  Scheduler,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,
  AppointmentTooltip,
  AppointmentForm,
  EditRecurrenceMenu,
  Resources,
  DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui';


import { AppointmentModel, SchedulerDateTime } from '@devexpress/dx-react-scheduler';
import {
   DayView,
} from '@devexpress/dx-react-scheduler-material-ui';

const appointments: Array<AppointmentModel> = [{
  startDate: '2018-10-31T10:00',
  endDate: '2018-10-31T12:30',
  title: 'Rehearsal',
  type: 'Rehearsal',
}, {
  startDate: '2018-10-31T07:30',
  endDate: '2018-10-31T09:00',
  title: 'Go to a gym',
  type: 'work',
}];
const resources = [{
  fieldName: 'type',
  title: 'Type',
  instances: [
    { id: 'private', text: 'Private', color: '#EC407A' },
    { id: 'work', text: 'Work', color: '#7E57C2' },
  ],
}];

const Demo: React.SFC = () => {
  const [currentDate, setCurrentDate] = React.useState<SchedulerDateTime>('2018-10-31');

  return (
    <Paper>
      <Scheduler
        data={appointments}
      >
        <ViewState
          currentDate={currentDate}
          onCurrentDateChange={setCurrentDate}
        />
        <DayView
          startDayHour={7}
          endDayHour={12}
        />

        <Appointments />
        <Resources
          data={resources}
        />
      </Scheduler>
    </Paper>
  );
};

export default Demo;
