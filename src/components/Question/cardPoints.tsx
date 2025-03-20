import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '../ui/button'

interface Question {
  id: number
  enunciado: string
  alternativas: string[]
  alternativa_correta: string
}

export default function CustomCard({ points, questions }: { points: number; questions: Question[] }) {
  return (
    <Dialog open>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-col gap-5 justify-center items-center">
              <label>Parabéns! Sua pontuação foi:</label>
              <label className="text-7xl">{points}/{questions.length}</label>
              <Button
                onClick={() => {
                  location.reload()
                }}
                className="w-28"
              >
                Reiniciar
              </Button>
            </div>
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
