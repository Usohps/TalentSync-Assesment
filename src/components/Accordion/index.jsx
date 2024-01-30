import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

function Accordionitem() {
  const defaultContent =
    "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.";

  return (
    <Accordion>
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title="How many participants can join a ClearLink video conference?"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        title="Can I use ClearLink on multiple devices?"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title="Is ClearLink compatible with other video conferencing platforms?"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Accordion 4"
        title="How does ClearLink ensure the security of my video conferences?"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="Accordion 5"
        title="Do I need to download any software to use ClearLink?"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="6"
        aria-label="Accordion 6"
        title="What kind of customer support does ClearLink provide?"
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
export default Accordionitem;
