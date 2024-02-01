import React, { useState } from "react";
import { dummyData } from "../../app/accordion_data/DummyData";
import AccordionCard from "./Accordion";
function AccordionItem() {
  // list of dummy data for the accordion set in state
  const [datas, setDatas] = useState(dummyData.datalist);
  // console.log(dummyData)

  //template with stlyes below
  return (
    <div className="flex flex-col items-center border  md:min-w-[500px]">
      {datas &&
        datas.map((data, index) => {
          return <AccordionCard key={index} title={data.title} content={data.content} />;
        })}
    </div>
  );
}
export default AccordionItem;
