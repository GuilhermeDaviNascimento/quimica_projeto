'use client'

import { useEffect, useState } from 'react'
import RenderQuestions from '@/components/Question/question'

export default function Home() {
  const [questions, setQuestions] = useState<any[]>([])

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch('/api/questoesAPI/?embaralhado=true')
        if (!res.ok) {
          throw new Error('Falha ao carregar perguntas')
        }
        const data = await res.json()
        setQuestions(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchQuestions()
  }, [])

  return (
    <div className="w-full h-full">
      <RenderQuestions questions={questions}></RenderQuestions>
    </div>
  )
}
