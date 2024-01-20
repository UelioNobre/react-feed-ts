import React from 'react'
import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1563089145-599997674d42?w=500&auto=format&fit=crop&q=20&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D" alt="Cover" />

      <div className={styles.profile}>
        <Avatar hasBig src="https://github.com/UelioNobre.png" />
        <strong>Uélio Nobre</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="/#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
