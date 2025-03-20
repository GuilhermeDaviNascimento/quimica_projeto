'use client'

import { useEffect, useState } from 'react'
import RenderQuestions from '@/components/Question/question'

interface Question {
  id: number
  enunciado: string
  alternativas: string[]
  alternativa_correta: string
}


export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([])

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
