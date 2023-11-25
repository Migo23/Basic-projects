import './index.css';
import React, { useState } from 'react';


const LessonPlanner = () => {
  const [lessons, setLessons] = useState([]);
  const [lessonName, setLessonName] = useState('');
  const [startHour, setStartHour] = useState('');
  const [startMinute, setStartMinute] = useState('');

  const addLesson = () => {
    if (lessonName && startHour !== '' && startMinute !== '') {
      const newLesson = {
        id: lessons.length + 1,
        name: lessonName,
        startTime: `${startHour}:${startMinute}`,
      };

      setLessons([...lessons, newLesson]);
      setLessonName('');
      setStartHour('');
      setStartMinute('');
    } else {
      alert('Wprowadź wszystkie informacje dotyczące lekcji.');
    }
  };

  return (
    <div>
      <h2>Plan Lekcji</h2>
      <div>
        <label>Nazwa lekcji:</label>
        <input
          type="text"
          value={lessonName}
          onChange={(e) => setLessonName(e.target.value)}
        />
      </div>
      <div>
        <label>Godzina rozpoczęcia:</label>
        <input
          type="number"
          value={startHour}
          onChange={(e) => setStartHour(e.target.value)}
        />
      </div>
      <div>
        <label>Minuta rozpoczęcia:</label>
        <input
          type="number"
          value={startMinute}
          onChange={(e) => setStartMinute(e.target.value)}
        />
      </div>
      <button onClick={addLesson}>Dodaj lekcję</button>

      <div>
        <h3>Lista lekcji:</h3>
        <ul>
          {lessons.map((lesson) => (
            <li key={lesson.id}>
              {`Lekcja ${lesson.id}: ${lesson.name} o godzinie ${lesson.startTime}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LessonPlanner;