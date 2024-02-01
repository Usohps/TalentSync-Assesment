import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
function AccordionCard({ title, content}) {
  //stae to handle open and closing of the accordion
  const [isOpen, setIsOpen] = useState(false);
  //function responsible for the opening and closing accordion
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div data-aos="zoom-in" className="w-full mx-auto px-5">
        <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
          <div onClick={toggle} className="py-3 max-w-400px">
            <details className="group">
              <summary className="  space-x-3 flex justify-between items-center font-medium cursor-pointer list-none">
                <span>{title}</span>
                <span className="transition group-open:rotate-180">
                  {!isOpen ? <GoPlus /> : <FiMinus />}
                </span>
              </summary>
              {isOpen && (
                <p data-aos="zoom-in" className="text-neutral-600 mt-2 px-3 group-open:animate-fadeIn">
                  {content}
                </p>
              )}
            </details>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccordionCard;
