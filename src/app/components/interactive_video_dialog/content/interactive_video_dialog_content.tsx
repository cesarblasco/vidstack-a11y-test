import { FC } from 'react';
import styles from './interactive_video_dialog_content.module.css';

interface InteractiveVideoDialogContentProps {
    title: string;
    description: string;
    questionList: { id: number, text: string }[];
}

const InteractiveVideoDialogContent: FC<InteractiveVideoDialogContentProps> = ({ 
    title,
    description,
    questionList,   
}) => {
  return (
    <div className={styles.wrapper}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <ul>
            {questionList.map((question) => (
                <li className={styles.question} key={question.id}>{question.text}</li>
            ))}
        </ul>
    </div>
    

  );
}


  export default InteractiveVideoDialogContent;