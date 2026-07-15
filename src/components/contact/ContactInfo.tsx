import { MapPin, Phone, Mail, Clock3 } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const details = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["123 Temple Street, Near City Centre,", "Hyderabad, Telangana 500001"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 00000 00000"],
    href: "tel:+910000000000",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@meenakshimenspg.com"],
    href: "mailto:info@meenakshimenspg.com",
  },
  {
    icon: Clock3,
    title: "Visiting Hours",
    lines: ["Every day, 9:00 AM - 8:00 PM"],
  },
];

export default function ContactInfo() {
  return (
    <div className="flex h-full flex-col gap-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {details.map((item) => {
          const Icon = item.icon;
          const content = (
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-maroon-800 text-gold-400">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-sm font-semibold text-maroon-900">{item.title}</p>
                {item.lines.map((line) => (
                  <p key={line} className="text-sm text-ink-soft">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          );
          return (
            <div key={item.title} className="rounded-xl border border-gold-500/15 bg-cream p-5">
              {item.href ? <a href={item.href}>{content}</a> : content}
            </div>
          );
        })}
      </div>

      <ImagePlaceholder
        icon={MapPin}
        label="Find Us Here"
        gradient="from-maroon-700 via-maroon-800 to-maroon-900"
        className="min-h-[260px] flex-1 rounded-2xl card-shadow"
      />
    </div>
  );
}
