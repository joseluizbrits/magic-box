import { useEffect, useState } from 'react';
  
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
    trackVisibility: true,
    delay: 100,
  }

export default function useObserver() {
  const callback = (entries) => {
    entries.map(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show')
    })
  }

  return (
    useEffect(() => {
      const elements = document.querySelectorAll('.anime')
      
      const observer = new IntersectionObserver(callback, options)
  
      elements?.forEach((element) => observer.observe(element))
  
      return () => {
        elements.forEach((element) => {
          if (element.classList.contains('show')) observer.unobserve(element)
        })
      }
    }, [])
  );
}
