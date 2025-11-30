import React, { useState } from 'react'
import { generateStory } from '../utils/openai'


export default function StoryGenerator(){
const [mood, setMood] = useState('mysterious')
const [length, setLength] = useState('short')
const [loading, setLoading] = useState(false)
const [result, setResult] = useState('')


async function handleGenerate(){
setLoading(true)
try{
const res = await generateStory({ mood, length })
setResult(res)
}catch(e){
setResult('Error generating story. Check your API key and console.')
console.error(e)
}
setLoading(false)
}


return (
<div>
<h4 className="text-lg font-semibold">AI Story Generator</h4>
<div className="mt-3 flex gap-2">
<select value={mood} onChange={e=>setMood(e.target.value)} className="bg-transparent border rounded px-2 py-1">
<option value="mysterious">Mysterious</option>
<option value="thrilling">Thrilling</option>
<option value="horror">Horror</option>
<option value="romantic">Romantic</option>
</select>
<select value={length} onChange={e=>setLength(e.target.value)} className="bg-transparent border rounded px-2 py-1">
<option value="short">Short</option>
<option value="medium">Medium</option>
<option value="long">Long</option>
</select>
<button onClick={handleGenerate} className="px-3 py-1 bg-vionixPurple rounded">{loading? '...' : 'Generate'}</button>
</div>


<div className="mt-4 p-3 bg-black/30 rounded min-h-[120px]">
{result ? <pre className="whitespace-pre-wrap text-sm">{result}</pre> : <p className="text-slate-400">Choose mood & length then click Generate to create a personalized story.</p>}
</div>
</div>
)
}