import Link from "next/link";

const Logo = ({ className = "text-2xl xl:text-2xl" }) => {
  return (
    <Link href="/" className="relative">
      <h1 className={`font-semibold ${className}`}>
        Olas<span className="text-accent">.</span>
      </h1>
    </Link>
  );
};

export default Logo;
