import Link from 'next/link';

export default function Anchor({ href, ariaLabel, className, children }) {
  return (
    <Link
      className={className}
      href={href}
      target="_blank"
      aria-label={ariaLabel}
      passHref
    >
      {children}
    </Link>
  );
}
