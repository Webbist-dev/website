'use client'

import { useEffect } from 'react'
import Prism from 'prismjs'

import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-graphql'
import 'prismjs/components/prism-scss'

export default function PrismLoader() {
	useEffect(() => {
		Prism.highlightAll()
	}, [])

	return <div className="hidden" />
}
