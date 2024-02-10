import React from 'react';

import {Inject,ScheduleComponent,Day,Week,WorkWeek,Month,Agenda} from '@syncfusion/ej2-react-schedule';
function Schedular() {
 // const navigate = useNavigate();
const localData={
  dataSource:[
    {
      EndTime:new Date(2019,0,11,6,30),
      StartTime:new Date(2019,0,11,4,0)
    }
  ]
}
  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
     <ScheduleComponent currentView='Month'>
        <Inject services={[Day,Week,Month,Agenda]}/>
     </ScheduleComponent>

    </div>
    
    
  );
}

export default Schedular;
