"use client";

import { ImageOff } from "lucide-react";
import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type SafeImageProps = ImageProps & {
  fallbackLabel?: string;
};

export function SafeImage({ alt, className, fallbackLabel, ...props }: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="grid h-full w-full place-items-center bg-[linear-gradient(180deg,#f4f8ef_0%,#e8f1e1_100%)] text-[var(--muted)]">
        <div className="flex flex-col items-center gap-2 px-3 text-center">
          <span className="grid size-10 place-items-center rounded-full bg-white/90 text-[var(--brand)] shadow-[0_8px_18px_rgba(57,64,74,0.08)]">
            <ImageOff size={18} />
          </span>
          <span className="text-[11px] font-bold leading-4 text-[var(--brand-dark)]">{fallbackLabel ?? alt}</span>
        </div>
      </div>
    );
  }

  return <Image {...props} alt={alt} className={className} onError={() => setFailed(true)} />;
}