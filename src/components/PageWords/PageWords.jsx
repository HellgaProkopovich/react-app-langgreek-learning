import { useMemo, useState } from 'react';

import { allWords } from '../../data/words.js';

// import iconEdit from '../../assets/icon-edit.svg';
// import iconDelete from '../../assets/icon-delete.svg';
// import iconEditYes from '../../assets/icon-check-yes.svg';
// import iconEditNo from '../../assets/icon-check-no.svg';
import styles from './pageWords.module.css';

const PageWords = () => {
    const [selectedTopis, setSelectedTopis] = useState("all");

    const topics = useMemo(() => {
        const uniqueTopics = new Set();
        allWords.forEach(word => word.topic.forEach(topic => uniqueTopics.add(topic)));
        return ["all", ...Array.from(uniqueTopics).sort()];
    }, []);

    const visibleWords = useMemo(() => {
        if (selectedTopis === "all") return allWords;
        return allWords.filter(word => word.topic.includes(selectedTopis));
    }, [selectedTopis]);

    return (
        <div className={styles.wordsListContainer}>
            <p className="textGrey">[the words]</p>
            <h1 className="title">οι λέξεις</h1>
            
            <select
                value={selectedTopis}
                onChange={(e) => setSelectedTopis(e.target.value)}>
                    {topics.map(topic => <option key={topic} value={topic}>{topic}</option>)}
            </select>
            
            <div className={styles.wordsTable}>
                {/* words table */}
                {visibleWords.map((word) => ( // slice().reverse() => если отобразить список слов в обратном порядке
                    <div key={word.id}>
                        <div className={styles.wordRow}>
                            <div className={styles.wordCell}>{word.term.greek}</div>
                            <div className={styles.wordCell}>{word.term.english}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default PageWords;