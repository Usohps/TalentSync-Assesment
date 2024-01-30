import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
function Accordionitem() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen)
  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  };
  
  const defaultContent =
    "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.";

  return (
    <div className="flex flex-col items-center border max-w-[800px]">
      <Accordion onClick={toggle}>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          indicator={isOpen ? <GoPlus /> : <FiMinus />}
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
      <>
        {/* component */}
        <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
          <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
            <div onClick={toggle} class="py-5">
              <details class="group">
                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> What is a SAAS platform?</span>
                  <span  class="transition group-open:rotate-180">
                  {!isOpen ? <GoPlus/> : <FiMinus />}
                  </span>
                </summary>
                {!isOpen && <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  SAAS platform is a cloud-based software service that allows
                  users to access and use a variety of tools and functionality.
                </p>}
              </details>
            </div>

          </div>
        </div>

        {/* <script>
	// ...
	// extend: {
    //   keyframes: {
    //     fadeIn: {
    //       "0%": { opacity: 0 },
    //       "100%": { opacity: 100 },
    //     },
    //   },
    //   animation: {
    //     fadeIn: "fadeIn 0.2s ease-in-out forwards",
    //   },
    // },
    // ...
</script> */}
      </>
    </div>
  );
}
export default Accordionitem;
