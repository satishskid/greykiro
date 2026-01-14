import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  href?: string;
  accentColor?: "blue" | "gold";
}

export function Card({
  children,
  className = "",
  hoverable = false,
  href,
  accentColor,
}: CardProps) {
  const baseStyles = "bg-white rounded-xl border border-gray-200 p-6";
  const hoverStyles = hoverable ? "transition-all duration-300 hover:shadow-lg hover:-translate-y-1" : "";
  const accentStyles = accentColor === "blue" 
    ? "hover:border-brand-blue/50" 
    : accentColor === "gold" 
    ? "hover:border-brand-gold/50" 
    : "";
  
  const styles = `${baseStyles} ${hoverStyles} ${accentStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={`block ${styles}`}>
        {children}
      </Link>
    );
  }

  return <div className={styles}>{children}</div>;
}
