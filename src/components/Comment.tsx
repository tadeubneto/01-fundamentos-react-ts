import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";
import styles from "./Comment.module.css";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;

}

export function Comment({content, onDeleteComment}: CommentProps) {

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount((state) => {
      return state + 1
    }
  )}

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false}
      src="https://github.com/tadeubneto.png"
      
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Tadeu</strong>
              <time title="11 de março às 08:00h" dateTime="2024-03-11 08:02">
                Publicado há 1h
              </time>
          <p>{content}</p>
            </div>
        <button onClick={handleDeleteComment} title="Deletar comentário">
            <Trash size={24}/>
        </button>
          </header>
        </div>
        <footer>
        <button onClick={handleLikeComment}>
            <ThumbsUp size={20}/>
            Aplaudir
            <span>{likeCount}</span>
        </button>
        </footer>
      </div>
    </div>
  );
}
