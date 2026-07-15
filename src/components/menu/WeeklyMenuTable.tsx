import { Flame } from "lucide-react";
import { weeklyMenu } from "@/data/menu";

export default function WeeklyMenuTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gold-500/15 card-shadow">
      <table className="w-full min-w-[720px] border-collapse bg-cream text-left text-sm">
        <thead>
          <tr className="bg-maroon-800 text-cream">
            <th className="px-6 py-4 font-serif-display text-base font-semibold">Day</th>
            <th className="px-6 py-4 font-serif-display text-base font-semibold">Breakfast</th>
            <th className="px-6 py-4 font-serif-display text-base font-semibold">Lunch</th>
            <th className="px-6 py-4 font-serif-display text-base font-semibold">Dinner</th>
          </tr>
        </thead>
        <tbody>
          {weeklyMenu.map((day, index) => (
            <tr
              key={day.day}
              className={index % 2 === 0 ? "bg-cream" : "bg-cream-soft"}
            >
              <td className="px-6 py-4 font-semibold text-maroon-900">{day.day}</td>
              <td className="px-6 py-4 text-ink-soft">{day.breakfast}</td>
              <td className="px-6 py-4 text-ink-soft">{day.lunch}</td>
              <td className="px-6 py-4 text-ink-soft">
                <div className="flex items-center gap-2">
                  <span>{day.dinner}</span>
                  {day.dinnerNote === "non-veg" && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-gold-500/15 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-gold-700">
                      <Flame className="h-3 w-3" />
                      Non-Veg
                    </span>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
