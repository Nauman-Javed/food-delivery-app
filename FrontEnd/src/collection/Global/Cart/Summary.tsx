import StyledTypography from "@/components/Text/StyledTypography";
import React from "react";

export const Summary = () => {
  return (
    <div className="h-full overflow-y-scroll">
      <div className="bg-white  w-[100%] rounded-lg p-4 flex flex-col shadow-custom-lrb">
        <div>
          <StyledTypography text="Summary" className="text-lg font-semibold" />
        </div>
        <div>
          <div className="border-t-2 border-slate-500 mx-3"></div>
          <StyledTypography text="Total" className="text-lg font-semibold" />
        </div>
      </div>
    </div>
  );
};
