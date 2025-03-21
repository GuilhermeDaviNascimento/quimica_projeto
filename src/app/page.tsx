'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <div className="w-full h-full p-5 flex justify-center items-center flex-col gap-5 sm:w-1/2 lg:w-1/3">
      <h1 className="font-bold text-4xl text-center">
        Bem-vindo ao Quiz de Ácidos Carboxílicos e Ésteres!
      </h1>
      <p className="text-center">
        Bem-vindo ao nosso desafio químico! Teste seus conhecimentos sobre
        ácidos carboxílicos e ésteres, compostos presentes em aromas,
        medicamentos e muito mais. Responda perguntas sobre estrutura,
        nomenclatura e aplicações. Pronto para o desafio? Clique em Iniciar!
      </p>
      <img
        src="/frasco.png"
        alt="Frasco"
        className="animate-[custom-bounce_2s_infinite] w-2/3"
        style={{
          animationName: 'custom-bounce',
          animationDuration: '8s',
          animationIterationCount: 'infinite',
        }}
      />

      <Button className="w-50" onClick={() => router.push('/questoes')}>
        Iniciar!
      </Button>
    </div>
  )
}
