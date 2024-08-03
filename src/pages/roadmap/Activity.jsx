// src/components/Activity.js
import React from 'react';
import './ActivityData.css';

const Activity = ({ title, material, note, tasks }) => {
  return (
    <div className="activity">
      <h3>{title}</h3>
      <div>
        <strong>Materi :</strong>
        <ul>
          {material.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Note :</strong> <a href={note.link}>{note.text}</a>
      </div>
      <div>
        <strong>Tugas :</strong>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Activity;