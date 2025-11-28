import Image from "next/image";
import Link from "next/link";

export default function ToolItem({
  id,
  label,
  link,
}: {
  id: string;
  label: string;
  link: string;
}) {
  return (
    <Link href={link} target="_blank">
      <div key={id} className="group relative">
        <div className="aspect-square w-14 overflow-hidden rounded-md bg-zinc-100 2xl:w-16">
          <Image
            src={`/icons/${id}.svg`}
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>

        <span className="invisible absolute top-full left-1/2 mt-2 -translate-x-1/2 -translate-y-1 rounded-md border border-[#E3E1E1] bg-[#FAFAFA] px-2 py-1 text-center text-xs font-medium tracking-wide text-nowrap text-[#121212] opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          {label}
        </span>
      </div>
    </Link>
  );
}
