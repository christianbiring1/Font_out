import React, { useEffect, useState } from 'react';
import Interface from './Interface';
import { getStandardFonts } from './utils/standardFonts';


function Page() {

  const [googleFonts, setGoogleFonts] = useState([]);

  useEffect(() => {
    const getGoogleFonts = async () => {

      const API_KEY = "AIzaSyD2p_71tmw-dMxRvNn6DyFILkXy2tVLb0k";
      const res = await fetch(
        `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`
      );

      if (!res.ok) {
      throw new Error("Failed to fetch Fonts from Google")
      }
    
      return res.json();
    };
    getGoogleFonts()
  }, [googleFonts])

  const standardFonts = getStandardFonts();
  const googleFontResponse = googleFonts;
  return (
    <main className="min-h-screen p-6 md:p-12 flex flex-column justify-center">
      <div className="z-10 w-full max-w-none md:max-w-5xl text-center">
        <h1 className="font-medium text-5xl">What the FOUT! 🤌</h1>
        <p className="my-8 text-left">
          A CSS playground for <code>size-adjust</code> and F-mods (font metric
          overrides). It will help you find the right fallback for your font and
          tweak it in order to get the best possible results.
        </p>
        <Interface
          googleFonts={googleFontResponse.items}
          standardFonts={standardFonts}
        />
        <div className="mt-8 text-sm text-slate-600 text-left md:text-center leading-6">
          Made by&nbsp;
          <a
            className="border-b-2 border-slate-600 border-dotted"
            target="_blank"
            href="https://github.com/christianbiring1/" rel="noreferrer"
          >
            Christian Biringanine
          </a>{" "}
          &copy; {new Date().getFullYear()}<br className="md:hidden" />
          <span className="hidden md:inline-block">&nbsp;</span>
          Built with React.js & Tailwind CSS ·
          <br className="md:hidden" />
          <span className="hidden md:inline-block">&nbsp;</span>
          <a
            target="_blank"
            href="https://github.com/christianbiring1/" rel="noreferrer"
          >
            <img
              alt="Github"
              className="w-3 h-3 inline-block bottom-0.5 relative"
              src="https://antoniocosentino.github.io/what-the-fout/github.svg"
            />
          </a>
          &nbsp;
          <a
            className="border-b-2 border-slate-600 border-dotted"
            target="_blank"
            href="https://github.com/christianbiring1/font_out" rel="noreferrer"
          >
            Source Code
          </a>
        </div>
      </div>
    </main>
  );
}

export default Page;