import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../UI/Card/Card'
import HeadArtefact from '../../../HOC/HeadArtefact/HeadArtefact'

const EquiparAvatarComItemDeMao = () => (
  <div className="content artefact">
    <HeadArtefact versions={ null } rastreability={ null }
                  title="Equipar Avatar com Item de Mão" author="Rogério Júnior"/>
    <Card>
      <h2>Objetivo</h2>
      <p>Personalizar avatar com <Link target="_blank" to='/ModelagemLexicos/Item de Mão'>Item de Mão</Link>.</p>
    </Card>

    <Card>
      <h2>Contexto</h2>
      <ul>
        <li>Pré-condição: O usuário deve estar logado, possuir celular ou computador,  deve possuir <Link target="_blank" to='/ModelagemLexicos/Item de Mão'>item de mão</Link> (esquerda / direita)</li>
        <li>Local: Inventário na aba <Link target="_blank" to='/ModelagemLexicos/Equipamento'>equipamentos</Link> (rp_inventory_v2.png)</li>
        <li>Tempo: Enquanto estiver usando o Habitica</li>
      </ul>
    </Card>

    <Card>
      <h2>Atores</h2>
      <ul>
        <li>Usuário.</li>
      </ul>
    </Card>

    <Card>
      <h2>Recursos</h2>
      <ul>
        <li><Link target="_blank" to='/ModelagemLexicos/Item de Mão'>Item de Mão</Link> (esquerda / direita)</li>
      </ul>
    </Card>

    <Card>
      <h2>Episódios</h2>
      <ul>
        <li>Usuário compra <Link target="_blank" to='/ModelagemLexicos/Item de Mão'>item de mão</Link> na loja</li>
        <li>Usuário ganha <Link target="_blank" to='/ModelagemLexicos/Item de Mão'>item de mão</Link> realizando tarefas</li>
        <li>Usuário compra <Link target="_blank" to='/ModelagemLexicos/Armário Encantado'>armário encantado</Link> e pode ganhar <Link target="_blank" to='/ModelagemLexicos/Item de Mão'>item de mão</Link></li>
        <li>Avatar customizado</li>
      </ul>
    </Card>

    <Card>
      <h2>Restrições</h2>
      <ul>
        <li>Beleza do item</li>
        <li>Melhora das habilidades do avatar</li>
      </ul>
    </Card>

    <Card>
      <h2>Exceções</h2>
      <ul>
        <li>Conexão com a internet falhar.</li>
      </ul>
    </Card>

  </div>
)

export default EquiparAvatarComItemDeMao