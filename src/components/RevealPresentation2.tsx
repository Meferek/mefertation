import dynamic from 'next/dynamic';

const RevealPresentation2 = dynamic(() => import('./RevealPresentationClient2'), {
  ssr: false, // Disable server-side rendering for this component
});

export default RevealPresentation2;
