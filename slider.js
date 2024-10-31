{\rtf1\ansi\ansicpg1252\cocoartf2708
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // JavaScript for clickable image slider let currentIndex = 0; const slides = document.querySelectorAll('.slide'); function showSlide(index) \{ slides.forEach((slide, i) => \{ slide.style.display = i === index ? 'block' : 'none'; \}); \} function nextSlide() \{ if (currentIndex < slides.length - 1) \{ currentIndex++; showSlide(currentIndex); \} \} function prevSlide() \{ if (currentIndex > 0) \{ currentIndex--; showSlide(currentIndex); \} \} // Initialize the slider showSlide(currentIndex);}