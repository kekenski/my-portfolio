"use client";

import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLinks = ({ href, title }: NavLinkProps) => {
  return (
    <Link href={href} legacyBehavior>
      <a className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
        {title}
      </a>
    </Link>
  );
};

export default NavLinks;
