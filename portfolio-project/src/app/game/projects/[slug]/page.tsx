import React from 'react';

export default function GameProjectDetails({ params }: { params: { slug: string } }) {
  return (
    <div className="max-w-7xl mx-auto py-24 px-8">
      <h1 className="font-headline text-4xl text-on-surface uppercase text-theme-primary">Game Project: {params.slug}</h1>
      <p className="font-body text-on-surface-variant mt-4">Case study data is loading...</p>
    </div>
  );
}
