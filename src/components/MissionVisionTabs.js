import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MissionVisionTabs() {
  return (
    <div className="md:w-1/2 mx-auto px-2 md:py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl border-2 border-green-700 p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-xl font-medium leading-5",
                "ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2",
                selected
                  ? "bg-green-700 text-white shadow"
                  : "bg-white text-green-700 hover:bg-white/[0.12]"
              )
            }
          >
            Mission
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-xl font-medium leading-5",
                "ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2",
                selected
                  ? "bg-green-700 text-white shadow"
                  : "bg-white text-green-700 hover:bg-white/[0.12]"
              )
            }
          >
            Vision
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3 mt-12 text-center",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <p className="font-semibold md:text-xl text-lg italic">
              "Bring together stakeholders in the agriculture ecosystem to
              provide farm management, financial support, market linkage and
              government convergence."
            </p>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3 mt-12 text-center",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <p className="font-semibold text-lg md:text-xl italic">
              "Driving rural communities towards resilience and sustainability"
            </p>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
