import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC } from "react";

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = (props) => {
  const styles = cn("aspect-[16/5] relative h-16", props.className);
  return (
    <div className={styles}>
      <Image src={`/next.svg`} alt="logo" fill />
    </div>
  );
};

export default Logo;
