import axios from 'axios'


const OPENAI_KEY = import.meta.env.VITE_OPENAI_API_KEY
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions'


export async function generateStory({ mood='mysterious', length='short' } = {}){
if(!OPENAI_KEY) throw new Error('Missing OpenAI API key. Add VITE_OPENAI_API_KEY to your .env file.')


const prompt = `Write a ${length} ${mood} short story in the style of contemporary YA fiction. Keep it immersive and punchy. Include vivid sensory details and a twist at the end.`


const payload = {
model: 'gpt-4o-mini',
messages: [
{ role: 'system', content: 'You are an assistant that writes short fiction for a youth audience.' },
{ role: 'user', content: prompt }
],
max_tokens: length === 'short' ? 300 : length === 'medium' ? 700 : 1200,
temperature: 0.8
}


const res = await axios.post(OPENAI_API_URL, payload, {
headers: {
Authorization: `Bearer ${OPENAI_KEY}`,
'Content-Type': 'application/json'
}
})


// The exact response shape may differ depending on the model; this pulls first assistant text.
const text = res.data?.choices?.[0]?.message?.content || res.data?.choices?.[0]?.text || ''
return text.trim()
}