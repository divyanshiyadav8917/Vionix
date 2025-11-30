import React from 'react'


export default function StoryCard({ title, tag, excerpt }){
return (
<article className="p-4 bg-white/3 rounded-lg">
<div className="flex items-center justify-between">
<h4 className="font-semibold">{title}</h4>
<span className="text-xs bg-white/5 px-2 py-1 rounded">{tag}</span>
</div>
<p className="mt-2 text-slate-300 text-sm">{excerpt}</p>
<div className="mt-4 flex justify-end">
<button className="text-sm bg-vionixPurple/80 px-3 py-1 rounded">Read</button>
</div>
</article>
)
}