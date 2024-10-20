"use client";

import React, { useState } from "react";
import { TimeLine, TimeLineItem } from "../utils/ExpTimeLine";
import { Button } from "../ui/Button";
import { data } from "@/lib/data";
const Experience = () => {
  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  return (
    <TimeLine>
      {data?.experience?.map((experience, index) => {
        const maxContent = 2;

        if (index >= maxContent && !seeMore) {
          return null;
        }
        return (
          <TimeLineItem
            key={`${experience.title}-${index}`}
            active={experience.active}
            last={experience.last}
          >
            <TimeLineItem.Title>
              <span className="font-bold transition-all hover:text-white ">
                {experience.title}
              </span>{" "}
              • <span className="text-neutral-200">{experience.period}</span>
            </TimeLineItem.Title>
            <TimeLineItem.Description>
              {experience.description}
            </TimeLineItem.Description>
          </TimeLineItem>
        );
      })}
      <div className="w-full flex items-center justify-center mt-4">
        <Button
          variant="ghost"
          onClick={handleSeeMore}
          className="hover:bg-white/10 hover:scale-1"
        >
          {seeMore ? "See less" : "See more"}
        </Button>
      </div>
    </TimeLine>
  );
};

export default Experience;
