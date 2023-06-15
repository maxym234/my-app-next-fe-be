import { useState, useEffect } from 'react'
import { Calendar as CalendarAntd, Typography, Badge, BadgeProps }  from 'antd/lib';
import { AvalibelTime } from "@/modules/main/avalibelTime/main-time.components";
import type { Dayjs } from 'dayjs';
import moment from 'moment';
import { fetchAvalibleAllTime } from '@/slices/avalibleAllTime.slice';
import { useAppSelector, useAppDispatch } from '@/store/hooks';


export const Calendar: React.FC = () => {  
    const [date, setDate] = useState('')
    const dispatch = useAppDispatch();
    const data = useAppSelector(state => state.avalibleAllTimeSlice.data);
    
    useEffect(() => {
      dispatch(fetchAvalibleAllTime());
    }, [dispatch]);
    
    const dateCurrent = new Date().getDate();    
    const getListData = (value: Dayjs, text: string) => {
      const valueDate = moment(value.toJSON()).format('YYYY-MM-DD')
        const list = data?.find((e, i, arr) => {
          if(valueDate === e?.date) {            
            return e;
          }
        })
          
        return list || {}
      };
    const dateCellRender = (value: Dayjs) => {        
        const listData = getListData(value, 'text');
            
        return (
          <ul className="events">
            {listData?.time?.map((item: any, index: number) => (
              <li key={item?.id}>
                <Badge status='success' text={item?.time} />
              </li>
            ))}
          </ul>
        );
      };
    const cellRender = (date: Dayjs ) => {
        return dateCellRender(date);
    }
    return (
        <div className="max-w-[1200px] flex flex-col m-auto">
            <CalendarAntd 
                cellRender={cellRender}
                disabledDate={
                    (date) => {
                        
                    if (date.date() < +dateCurrent) {
                        return true;
                    }
                    return false;
                }}
                onSelect={(value) => {
                  const selectDate = moment(value.toJSON()).format('YYYY-MM-DD')
                    setDate(selectDate);
                }}
                headerRender={({ value }) => {                    
                    return (
                    <div style={{ padding: 8 }}>
                        <Typography.Title className='text-center font-bold' level={4}>{value.toDate().toDateString()}</Typography.Title>
                    </div>
                    );
                }}
            />
            <AvalibelTime date={date}/>
        </div>
    )
}