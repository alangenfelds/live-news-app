import Link from 'next/link';
import React from 'react';

type Props = {
  category: string;
  isActive: boolean;
};

const NavLink = ({ category, isActive }: Props) => {
  return (
    <Link
      href={`/news/${category}`}
      className={`navlink ${
        isActive &&
        'underline decoration-orange-400 underline-offset-4 font-bold text-lg'
      }`}
    >
      <span className="capitalize">{category}</span>
    </Link>
  );
};

export default NavLink;
