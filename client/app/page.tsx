"use client"
import { Header } from "@/common/components/header/header.component";

import { Calendar } from "@/modules/main/calendar/main-calendar.components";


export default function App (){
  return (
    <>
      <Header />
      <div className="max-w-[1200px] flex flex-col m-auto">
        <Calendar />
        
      </div>
    </>
  );
}
