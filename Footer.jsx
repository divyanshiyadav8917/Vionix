import React from 'react'


export default function Footer(){
return (
<footer className="py-6 border-t border-slate-800 mt-8">
<div className="container mx-auto px-4 text-center text-sm text-slate-400">© {new Date().getFullYear()} VIONIX. All rights reserved.</div>
</footer>
)
}