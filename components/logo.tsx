import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC } from "react";

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = (props) => {
  const styles = cn("aspect-[1] relative h-12 lg:h-16", props.className);
  return (
    <div className="flex items-center gap-x-2">
      <div className={styles}>
        <Image src={`/logo.png`} className="object-contain" alt="logo" fill />
      </div>
      <h2 className="text-2xl hidden md:flex font-bold">Insider's Edge</h2>
    </div>
  );
};

export default Logo;
