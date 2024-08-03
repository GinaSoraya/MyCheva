// src/components/Month.js
import React, { useState } from 'react';
import Activity from './ActivityData';
import './RoadmapData.css';

const Month = ({ month, activities, addActivity }) => {
  const [newActivity, setNewActivity] = useState({
    title: '',
    material: [],
    note: { text: '', link: '' },
    tasks: [],
  });

  const handleAddActivity = () => {
    if (newActivity.title.trim() !== '') {
      addActivity(month, newActivity);
      setNewActivity({
        title: '',
        material: [],
        note: { text: '', link: '' },
        tasks: [],
      });
    }
  };

  return (
    <div className="month">
      <h2>{month}</h2>
      {activities.map((activity, index) => (
        <Activity key={index} {...activity} />
      ))}
      <div className="add-activity">
        <input
          type="text"
          value={newActivity.title}
          onChange={(e) => setNewActivity({ ...newActivity, title: e.target.value })}
          placeholder="Title"
        />
        <input
          type="text"
          value={newActivity.note.text}
          onChange={(e) => setNewActivity({ ...newActivity, note: { ...newActivity.note, text: e.target.value } })}
          placeholder="Note text"
        />
        <input
          type="text"
          value={newActivity.note.link}
          onChange={(e) => setNewActivity({ ...newActivity, note: { ...newActivity.note, link: e.target.value } })}
          placeholder="Note link"
        />
        <textarea
          value={newActivity.tasks.join(', ')}
          onChange={(e) => setNewActivity({ ...newActivity, tasks: e.target.value.split(', ') })}
          placeholder="Tasks (comma separated)"
        />
        <button onClick={handleAddActivity}>Add</button>
      </div>
    </div>
  );
};

export default Month;