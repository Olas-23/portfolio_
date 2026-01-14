import Link from 'next/link';

import { FaBehance, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaBehance />, path: "https://www.behance.net/ajayiolaoluwa" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/olaoluwa-bajayi/" },
  { icon: <FaTwitter />, path: "https://x.com/Ajayi_Olaoluwa_" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/_.olas23/" },
];

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link href={item.path} key={index} className={iconStyles} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Socials