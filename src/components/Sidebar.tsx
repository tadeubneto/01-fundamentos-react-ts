import { PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img
            className={styles.cover}
            src="https://images.unsplash.com/photo-1721332153370-56d7cc352d63?q=300&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />
            <div className={styles.profile}>
                <Avatar  
                src="https://github.com/tadeubneto.png"
                />
                <strong>Tadeu</strong>
                <span>Developer Academy</span>
            </div>
                <footer>
                    <a href="#">
                        <PencilLine />
                        Editar seu perfil</a>
                </footer>
        
        </aside>
    )
}