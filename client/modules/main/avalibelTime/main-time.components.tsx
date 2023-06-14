import { useEffect } from 'react';

import { fetchAvalibleTime } from '@/slices/avalibleTimeByDate.slice';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { ButtonUI } from '@/ui/button';

interface Props {
  date: string
}

export const AvalibelTime: React.FC<Props> = ({ date }) => {  
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.avalibleTimeSlice.data);
  useEffect(() => {
    dispatch(fetchAvalibleTime(date));
  }, [date]);

    return (
        <div className="mt-[30px] mb-[15px]">
          <h2 className="text-center text-[24px] font-semibold mb-[15px]">Available start times</h2>
          <div className='flex max-w-[1190px] flex-wrap'>
            {data?.time?.map( (el: any) => 
            <ButtonUI key={el?.id}>{el?.time}</ButtonUI>
            )}
          </div>
        </div>
    )
}