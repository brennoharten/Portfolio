import { Item } from "@radix-ui/react-select";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import { FC } from "react";

type SocialItem = {
  icon: JSX.Element;
  path: string;
};

type SocialProps = {
  containerStyles: string;
  iconStyles: string;
};

const socials: SocialItem[] = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "" },
];

const Social: FC<SocialProps> = (props: SocialProps) => {
  const { containerStyles, iconStyles } = props;

  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
