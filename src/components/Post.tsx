import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { format, formatDistanceToNow } from 'date-fns';//lib de formatção de hora
import { ptBR } from 'date-fns/locale/pt-BR'
import { useState, FormEvent, ChangeEvent, InvalidEvent } from "react";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;

}

interface Content {
  type: 'paragraph' | 'link';
  content: string
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
  
}

interface PostProps {
  post: PostType;
 
}

export function Post( {post }: PostProps) {


  const [newCommentText, setNewCommentText] = useState('')

  const [comments, setComments] = useState([
   'olá'
    
    ])

  const publishedDateFormat = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true, //seria o prefixo do nosso portugues
  })
  
  function handleCreateNewComment(event:FormEvent ){
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')//apos executar a função, limpa a text area

  }

  function handleNewCommentText(event: ChangeEvent<HTMLTextAreaElement>){ 
    event.target.setCustomValidity('')//seta novamente o estado vazio 
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Campo Obrigatório')// função para msg de validação
  }

  function deleteComment(commentsToDelete: string){

  const commentsWithoutDeleteOne = comments.filter(comment => {
    return comment !== commentsToDelete
  })

    setComments(commentsWithoutDeleteOne)
    
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={post.author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormat} dateTime={post.publishedAt.toISOString()}>
          {publishedRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {post.content.map(line => {
          if(line.type === 'paragraph'){
            return <p key={line.content}>{line.content}</p>
          }else if (line.type === 'link'){
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })
        }
      </div>   
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
        name="comment"
        value={newCommentText}// valor dela sempre vai ser o estado inicial     
        placeholder="Deixe um comentário"
        onChange={handleNewCommentText}//monitora as mudanças da função
        required
        onInvalid={handleNewCommentInvalid}
        />
        <footer>
         <button type="submit"
         disabled={isNewCommentEmpty}>
         Publicar
         </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
            key={comment} 
            content={comment} 
            onDeleteComment={deleteComment}
            />
          ) 
        })}
              
      </div>
    </article>
  );
}

