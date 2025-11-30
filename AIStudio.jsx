import React from 'react'


export default function AIStudio(){
return (
<div>
<h2 className="text-2xl font-bold">AI Studio</h2>
<p className="mt-2 text-slate-300">Generate personalized stories, create characters, and export to PDF or share links.</p>
<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
{/* Left: Story generator (reuse component) */}
<div className="p-4 bg-white/3 rounded">
<p>Story Generator</p>
</div>
<div className="p-4 bg-white/3 rounded">
<p>Character Creator (placeholder)</p>
</div>
</div>
</div>
)
}