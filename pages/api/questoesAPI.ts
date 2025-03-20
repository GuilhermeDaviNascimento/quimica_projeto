const questions = [
  {
    id: 1,
    enunciado: 'Qual é a fórmula geral dos ácidos carboxílicos?',
    alternativas: ['R-COOH', 'R-CHO', 'R-OH', 'R-NH2'],
    alternativa_correta: 'R-COOH',
  },
  {
    id: 2,
    enunciado: 'Qual das seguintes substâncias é um ácido carboxílico?',
    alternativas: ['Ácido acético', 'Etanol', 'Propano', 'Metilamina'],
    alternativa_correta: 'Ácido acético',
  },
  {
    id: 3,
    enunciado:
      'Qual é o nome do éster formado pela reação entre ácido acético e etanol?',
    alternativas: [
      'Acetato de etila',
      'Ácido etanoico',
      'Etanoato de metila',
      'Metanol',
    ],
    alternativa_correta: 'Acetato de etila',
  },
  {
    id: 4,
    enunciado: 'Que tipo de reação forma um éster?',
    alternativas: [
      'Esterificação',
      'Saponificação',
      'Hidrólise',
      'Neutralização',
    ],
    alternativa_correta: 'Esterificação',
  },
  {
    id: 5,
    enunciado: 'Qual é o principal uso dos ésteres na indústria?',
    alternativas: ['Aromatizantes', 'Combustíveis', 'Plásticos', 'Explosivos'],
    alternativa_correta: 'Aromatizantes',
  },
  {
    id: 6,
    enunciado: 'Os ácidos carboxílicos possuem qual grupo funcional?',
    alternativas: [
      'Carboxila (-COOH)',
      'Hidroxila (-OH)',
      'Amina (-NH2)',
      'Carbonila (-C=O)',
    ],
    alternativa_correta: 'Carboxila (-COOH)',
  },
  {
    id: 7,
    enunciado:
      'Qual é a nomenclatura correta para o ácido carboxílico de fórmula C3H7COOH?',
    alternativas: [
      'Ácido butanoico',
      'Ácido propanoico',
      'Ácido metanoico',
      'Ácido etanoico',
    ],
    alternativa_correta: 'Ácido butanoico',
  },
  {
    id: 8,
    enunciado: 'Qual é a reação inversa da esterificação?',
    alternativas: ['Hidrólise', 'Neutralização', 'Oxidação', 'Polimerização'],
    alternativa_correta: 'Hidrólise',
  },
  {
    id: 9,
    enunciado: 'Os ésteres são frequentemente utilizados como?',
    alternativas: [
      'Aromatizantes',
      'Aditivos combustíveis',
      'Fertilizantes',
      'Antibióticos',
    ],
    alternativa_correta: 'Aromatizantes',
  },
  {
    id: 10,
    enunciado:
      'Qual é o nome do éster formado pela reação entre ácido butanoico e metanol?',
    alternativas: [
      'Butanoato de metila',
      'Metanoato de butila',
      'Metanoato de etila',
      'Butanoato de etila',
    ],
    alternativa_correta: 'Butanoato de metila',
  },
  {
    id: 11,
    enunciado:
      'Os ácidos carboxílicos podem ser obtidos por qual tipo de reação?',
    alternativas: [
      'Oxidação de álcoois',
      'Hidrólise de ésteres',
      'Hidrogenação de alcenos',
      'Substituição nucleofílica',
    ],
    alternativa_correta: 'Oxidação de álcoois',
  },
  {
    id: 12,
    enunciado: 'Os ésteres possuem qual grupo funcional característico?',
    alternativas: ['-COO-', '-OH', '-NH2', '-COH'],
    alternativa_correta: '-COO-',
  },
  {
    id: 13,
    enunciado: 'Qual das seguintes substâncias é um éster?',
    alternativas: ['Acetato de etila', 'Ácido fórmico', 'Etanol', 'Glicerol'],
    alternativa_correta: 'Acetato de etila',
  },
  {
    id: 14,
    enunciado:
      'A hidrólise de um éster em meio ácido resulta na formação de quais compostos?',
    alternativas: [
      'Ácido carboxílico e álcool',
      'Aldeído e álcool',
      'Éter e água',
      'Amida e ácido',
    ],
    alternativa_correta: 'Ácido carboxílico e álcool',
  },
  {
    id: 15,
    enunciado: 'Os ácidos carboxílicos podem ser reduzidos a quais compostos?',
    alternativas: ['Aldeídos e álcoois', 'Ésteres', 'Cetonas', 'Aminas'],
    alternativa_correta: 'Aldeídos e álcoois',
  },
  {
    id: 16,
    enunciado: 'A que classe de compostos pertencem os ésteres?',
    alternativas: [
      'Derivados de ácidos carboxílicos',
      'Hidrocarbonetos',
      'Aldeídos',
      'Cetonas',
    ],
    alternativa_correta: 'Derivados de ácidos carboxílicos',
  },
  {
    id: 17,
    enunciado:
      'Os ésteres podem ser obtidos pela reação entre quais compostos?',
    alternativas: [
      'Ácido carboxílico e álcool',
      'Cetona e álcool',
      'Aldeído e amina',
      'Álcool e éter',
    ],
    alternativa_correta: 'Ácido carboxílico e álcool',
  },
  {
    id: 18,
    enunciado: 'Qual é o nome do ácido carboxílico presente no vinagre?',
    alternativas: [
      'Ácido acético',
      'Ácido butanoico',
      'Ácido fórmico',
      'Ácido benzóico',
    ],
    alternativa_correta: 'Ácido acético',
  },
  {
    id: 19,
    enunciado: 'Os ésteres são responsáveis por quais propriedades em frutas?',
    alternativas: [
      'Aroma e sabor',
      'Cor e textura',
      'Dureza e resistência',
      'Amargor e toxicidade',
    ],
    alternativa_correta: 'Aroma e sabor',
  },
  {
    id: 20,
    enunciado:
      'A reação de saponificação de um éster forma qual composto principal?',
    alternativas: ['Sabão', 'Álcool', 'Aldeído', 'Cetonas'],
    alternativa_correta: 'Sabão',
  },
]

import { NextApiRequest, NextApiResponse } from 'next'

interface Question {
  id: number
  enunciado: string
  alternativas: string[]
  alternativa_correta: string
}


export default function fetcher(req: NextApiRequest, res: NextApiResponse) {
  // Função para embaralhar um array
  const shuffleArray = (array: Question[] | string[]): void => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]] // Troca os elementos
    }
  }

  // Função para embaralhar alternativas dentro das questões
  const shuffleAlternatives = (questions: Question[]): void => {
    questions.forEach((question) => {
      if (question.alternativas && Array.isArray(question.alternativas)) {
        shuffleArray(question.alternativas) // Embaralha as alternativas
      }
    })
  }

  switch (req.method) {
    case 'GET':
      if (req.query.embaralhado === 'true') {
        const shuffledQuestions: Question[] = [...questions] // Faz uma cópia das questões
        shuffleArray(shuffledQuestions) // Embaralha as questões
        shuffleAlternatives(shuffledQuestions) // Embaralha as alternativas de cada questão
        res.status(200).json(shuffledQuestions) // Retorna as questões e alternativas embaralhadas
      } else {
        res.status(200).json(questions) // Retorna as questões sem embaralhar
      }
      break

    //CONFERE SE AS RESPOSTAS TRAZIDAS ESTAO CORRETAS
    case 'POST':
      // Aqui o corpo da requisição é o objeto de respostas do usuário
      const userAnswers = req.body // Presumimos que o corpo seja um objeto simples { id: resposta }

      let correctCount = 0 // Contador de respostas corretas

      // Itera sobre as respostas do usuário
      Object.keys(userAnswers).forEach((key) => {
        const questionId = Number(key) // ID da questão
        const userAnswer = userAnswers[key] // Resposta do usuário

        // Encontra a questão correspondente pelo ID
        const question = questions.find((q) => q.id === questionId)

        // Verifica se a questão foi encontrada e se a resposta está correta
        if (question && question.alternativa_correta === userAnswer) {
          correctCount++ // Incrementa o contador de respostas corretas
        }
      })

      // Retorna a quantidade de respostas corretas
      res.status(200).json({ correctCount })
      break

    case 'PUT':
      const { id, updatedQuestion }: { id: number; updatedQuestion: Question } =
        req.body
      const questionIndex = questions.findIndex((q) => q.id === id)
      if (questionIndex === -1) {
        return res.status(404).json({ error: 'Question not found' })
      }
      questions[questionIndex] = updatedQuestion
      res.status(200).json(updatedQuestion)
      break

    case 'DELETE':
      const { questionId }: { questionId: number } = req.body
      const deleteIndex = questions.findIndex((q) => q.id === questionId)
      if (deleteIndex === -1) {
        return res.status(404).json({ error: 'Question not found' })
      }
      questions.splice(deleteIndex, 1)
      res.status(204).end()
      break

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
