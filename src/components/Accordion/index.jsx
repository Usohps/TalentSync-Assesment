import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
function Accordionitem() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <div className="flex flex-col items-center border  md:min-w-[500px]">
      <>
        {/* component */}
        <div className="w-full mx-auto px-5">
          <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
            <div
              onClick={toggle}
              className="py-3 max-w-400px"
            >
              <details className="group">
                <summary className=" border space-x-3 flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    How many participants can join a ClearLink video conference?
                  </span>
                  <span className="transition group-open:rotate-180">
                    {!isOpen ? <GoPlus /> : <FiMinus />}
                  </span>
                </summary>
                {isOpen && (
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    ClearLink offers flexible meeting options. Depending on your
                    subscription plan, you can host meetings with varying
                    numbers of participants. Our plans are designed to
                    accommodate small team collaborations and large-scale
                    webinars, ensuring you have the right fit for your needs.
                  </p>
                )}
              </details>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto px-5">
          <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
            <div
              onClick={toggle}
              className="py-5 max-w-400px"
            >
              <details className="group">
                <summary className=" border flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    How many participants can join a ClearLink video conference?
                  </span>
                  <span className="transition group-open:rotate-180">
                    {!isOpen ? <GoPlus /> : <FiMinus />}
                  </span>
                </summary>
                {isOpen && (
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    ClearLink offers flexible meeting options. Depending on your
                    subscription plan, you can host meetings with varying
                    numbers of participants. Our plans are designed to
                    accommodate small team collaborations and large-scale
                    webinars, ensuring you have the right fit for your needs.
                  </p>
                )}
              </details>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto px-5">
          <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
            <div
              onClick={toggle}
              className="py-5 max-w-400px"
            >
              <details className="group">
                <summary className=" border flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    How many participants can join a ClearLink video conference?
                  </span>
                  <span className="transition group-open:rotate-180">
                    {!isOpen ? <GoPlus /> : <FiMinus />}
                  </span>
                </summary>
                {isOpen && (
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    ClearLink offers flexible meeting options. Depending on your
                    subscription plan, you can host meetings with varying
                    numbers of participants. Our plans are designed to
                    accommodate small team collaborations and large-scale
                    webinars, ensuring you have the right fit for your needs.
                  </p>
                )}
              </details>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto px-5">
          <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
            <div
              onClick={toggle}
              className="py-5 max-w-400px"
            >
              <details className="group">
                <summary className=" border flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    How many participants can join a ClearLink video conference?
                  </span>
                  <span className="transition group-open:rotate-180">
                    {!isOpen ? <GoPlus /> : <FiMinus />}
                  </span>
                </summary>
                {isOpen && (
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    ClearLink offers flexible meeting options. Depending on your
                    subscription plan, you can host meetings with varying
                    numbers of participants. Our plans are designed to
                    accommodate small team collaborations and large-scale
                    webinars, ensuring you have the right fit for your needs.
                  </p>
                )}
              </details>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto px-5">
          <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
            <div
              onClick={toggle}
              className="py-5 max-w-400px"
            >
              <details className="group">
                <summary className=" border flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    How many participants can join a ClearLink video conference?
                  </span>
                  <span className="transition group-open:rotate-180">
                    {!isOpen ? <GoPlus /> : <FiMinus />}
                  </span>
                </summary>
                {isOpen && (
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    ClearLink offers flexible meeting options. Depending on your
                    subscription plan, you can host meetings with varying
                    numbers of participants. Our plans are designed to
                    accommodate small team collaborations and large-scale
                    webinars, ensuring you have the right fit for your needs.
                  </p>
                )}
              </details>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto px-5">
          <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
            <div
              onClick={toggle}
              className="py-5 max-w-400px"
            >
              <details className="group">
                <summary className=" border flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    How many participants can join a ClearLink video conference?
                  </span>
                  <span className="transition group-open:rotate-180">
                    {!isOpen ? <GoPlus /> : <FiMinus />}
                  </span>
                </summary>
                {isOpen && (
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    ClearLink offers flexible meeting options. Depending on your
                    subscription plan, you can host meetings with varying
                    numbers of participants. Our plans are designed to
                    accommodate small team collaborations and large-scale
                    webinars, ensuring you have the right fit for your needs.
                  </p>
                )}
              </details>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto px-5">
          <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
            <div
              onClick={toggle}
              className="py-5 max-w-400px"
            >
              <details className="group">
                <summary className=" border flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    How many participants can join a ClearLink video conference?
                  </span>
                  <span className="transition group-open:rotate-180">
                    {!isOpen ? <GoPlus /> : <FiMinus />}
                  </span>
                </summary>
                {isOpen && (
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    ClearLink offers flexible meeting options. Depending on your
                    subscription plan, you can host meetings with varying
                    numbers of participants. Our plans are designed to
                    accommodate small team collaborations and large-scale
                    webinars, ensuring you have the right fit for your needs.
                  </p>
                )}
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
