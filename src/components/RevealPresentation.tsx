import dynamic from 'next/dynamic';

const RevealPresentation = dynamic(() => import('./RevealPresentationClient'), {
  ssr: false, // Disable server-side rendering for this component
});

export default RevealPresentation;
