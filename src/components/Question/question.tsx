import { useState } from 'react'
import { Button } from '@/components/ui/button'
import CustomCard from './cardPoints'

interface Question {
  id: number
  enunciado: string
  alternativas: string[]
  alternativa_correta: string
}

export default function RenderQuestions({
  questions,
}: {
  questions: Question[]
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [responses, setResponses] = useState<Record<number, string>>({})
  const [points, setPoints] = useState(0)
  const [showCard, setShowCard] = useState(false)
  const handleNextQuestion: React.MouseEventHandler<HTMLButtonElement> = () => {
    setCurrentQuestion(currentQuestion + 1)
  }

  const handleAnswerChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setResponses({
      ...responses,
      [parseInt(e.target.name.split('_')[1])]: e.target.value,
    })
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    console.log(responses)

    try {
      const response = await fetch('/api/questoesAPI', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(responses), // Enviando os dados do formulário
      })

      if (!response.ok) {
        throw new Error('Erro na requisição')
      }

      const data = await response.json()
      setPoints(data.correctCount)
      setShowCard(true)
      console.log('Resposta do servidor:', data)
    } catch (error) {
      console.error('Erro ao enviar os dados:', error)
    }
  }

  const isAnswerSelected = (questionId: number) => {
    return responses[questionId] !== undefined
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="justify-center items-center flex w-full h-full p-5"
    >
      {questions.map(
        (question, index) =>
          index === currentQuestion && (
            <div key={index} className="flex flex-col">
              <div className="text-3xl mb-5">
                <h1>{question.enunciado}</h1>
              </div>
              <ul>
                {question.alternativas.map((alternativa, altIndex) => (
                  <li key={altIndex} className="mb-5 flex border rounded">
                    <label
                      htmlFor={`resposta_${question.id}_${altIndex}`}
                      className="flex items-center w-full cursor-pointer p-5"
                    >
                      <span className="mr-5">{altIndex + 1}</span>
                      <span className="flex-grow">{alternativa}</span>
                      <input
                        type="radio"
                        name={`resposta_${question.id}`}
                        id={`resposta_${question.id}_${altIndex}`}
                        value={alternativa}
                        onChange={handleAnswerChange}
                        className="ml-5"
                      />
                    </label>
                  </li>
                ))}
                {index < questions.length - 1 && (
                  <Button
                    onClick={handleNextQuestion}
                    disabled={!isAnswerSelected(question.id)}
                  >
                    Próximo
                  </Button>
                )}
                {index === questions.length - 1 && (
                  <Button type="submit">Enviar</Button>
                )}
              </ul>
            </div>
          )
      )}
      {showCard === true && <CustomCard points={points} questions={questions}></CustomCard>}
    </form>
  )
}
