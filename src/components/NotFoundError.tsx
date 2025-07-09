import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Technology } from '../types/Technology'

type NotFoundErrorProps = {
  technology?: Technology
  type: string
}

export const NotFoundError = ({ technology, type }: NotFoundErrorProps) => {
  return (
    <>
      <div className="not-found-error">
        <h2>404</h2>
        {technology ? (
          <p>Projeto com {technology.name} não encontrado!</p>
        ) : (
          <p>{type} não encontrado(a)</p>
        )}

        <Link to="/">
          <div className="back-icon">
            <p>Voltar para a home</p>
            <ArrowRight />
          </div>
        </Link>
      </div>
    </>
  )
}
