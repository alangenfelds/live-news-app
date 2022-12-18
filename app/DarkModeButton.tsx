'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

type Props = {};

const DarkModeButton = (props: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      {currentTheme === 'dark' ? (
        <SunIcon
          className="h-w w-8 cursor-pointer text-yellow-500"
          onClick={() => setTheme('light')}
        />
      ) : (
        <MoonIcon
          className="h-w w-8 cursor-pointer text-gray-900"
          onClick={() => setTheme('dark')}
        />
      )}
    </div>
  );
};

export default DarkModeButton;
