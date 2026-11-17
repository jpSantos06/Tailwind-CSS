import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import Lista from './components/Lista'
import Button from './components/Button'
import Badge from './components/Badge'
import Input from './components/Input'
import Alert from './components/Alert'

const items = [
  { id: 1, label: 'Componentes reutilizáveis' },
  { id: 2, label: 'Estilização com Tailwind CSS' },
  { id: 3, label: 'Props para personalização' },
]

export default function App() {
  const [nome, setNome] = useState('')

  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-600">Projeto de interface</p>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Biblioteca de componentes UI</h1>
          <p className="mt-3 max-w-2xl text-slate-600">Exemplos de componentes React reutilizáveis, estilizados com Tailwind CSS e configurados para diferentes estados e variantes.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Botões" description="O componente Button aceita variantes, tamanhos e eventos.">
            <div className="flex flex-wrap gap-3">
              <Button>Primário</Button>
              <Button variant="secondary">Secundário</Button>
              <Button variant="danger">Excluir</Button>
              <Button variant="outline">Contorno</Button>
              <Button size="sm">Pequeno</Button>
              <Button size="lg">Grande</Button>
            </div>
          </Card>

          <Card title="Badges" description="Indicadores visuais para diferentes estados.">
            <div className="flex flex-wrap gap-3">
              <Badge variant="success">Sucesso</Badge>
              <Badge variant="warning">Atenção</Badge>
              <Badge variant="error">Erro</Badge>
              <Badge variant="info">Informação</Badge>
              <Badge>Neutro</Badge>
            </div>
          </Card>

          <Card title="Campo de entrada" description="Input controlado por estado, com texto auxiliar e validação simples.">
            <Input
              id="nome"
              label="Seu nome"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              helperText="O valor é atualizado conforme você digita."
            />
            {nome && <p className="mt-3 text-sm text-slate-600">Olá, <strong>{nome}</strong>!</p>}
          </Card>

          <Card title="Lista" description="Renderização de elementos com map e chave única.">
            <Lista items={items} />
          </Card>

          <Card title="Alertas" description="O componente Alert possui três variantes solicitadas.">
            <div className="space-y-3">
              <Alert variant="success" title="Sucesso">A operação foi concluída corretamente.</Alert>
              <Alert variant="warning" title="Atenção">Confira os dados antes de continuar.</Alert>
              <Alert variant="error" title="Erro">Não foi possível concluir a operação.</Alert>
            </div>
          </Card>

          <Card title="Sobre a biblioteca" description="Os componentes foram separados em arquivos para facilitar manutenção e reutilização.">
            <p className="text-sm leading-6 text-slate-600">Cada componente recebe propriedades (props) que permitem alterar seu conteúdo, aparência e comportamento sem duplicar código.</p>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}