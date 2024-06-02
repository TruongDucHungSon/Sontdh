import React from "react";

const AllProjects = () => {
  return (
    <div>
      <table id="content" className="mt-12 w-full border-collapse text-left">
        <thead className="sticky top-0 z-10 border-b border-gray-500 text-text-primary px-6 py-5 ">
          <tr>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
              Year
            </th>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
              Project
            </th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
              Made at
            </th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
              Built with
            </th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2022</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <span>Harvard Business School Design System</span>
                </div>
                <div className="hidden sm:block">
                  Harvard Business School Design System
                </div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Upstatement
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-gr-12 px-3 py-1 text-xs font-medium leading-5 text-gr-5a ">
                    Storybook
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-gr-12 px-3 py-1 text-xs font-medium leading-5 text-gr-5a ">
                    React
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-gr-12 px-3 py-1 text-xs font-medium leading-5 text-gr-5a ">
                    TypeScript
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllProjects;
