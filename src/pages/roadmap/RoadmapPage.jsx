// src/components/Timeline.js
import React from 'react';
import './RoadmapPage.css';

const Timeline = () => {
    const timelineData = [
        {
            month: "Januari",
            tasks: [
                {
                    title: "Design Thinking",
                    details: [
                        "Emphasize",
                        "Define",
                        "Ideate",
                        "Prototype"
                    ],
                    note: "Link materi"
                },
                {
                    title: "Proyek Research 15 Hari",
                    details: [
                        "Lakukan observasi dari study case yang anda pilih",
                        "Buat user journey",
                        "Lakukan define dari hasil observasi",
                        "Lakukan tahapi design thinking dari emphasize sampai ideate secara berurutan"
                    ],
                    note: "Link materi"
                }
            ]
        },
        {
            month: "Februari",
            tasks: [
                {
                    title: "Use Case Diagram dan User Flow",
                    details: [
                        "Use Case",
                        "User Flow"
                    ],
                    note: "Link materi",
                    tugas: [
                        "Buat Wireframe (15 Hari pertama)",
                        "Buat MockUp (15 Hari kedua)",
                        "Buat Use Case dan User Flow"
                    ]
                },
                {
                    title: "Konsultasi Proyek",
                    note: "Asistensi proyek, Presentasi Proyek sampai MockUp"
                }
            ]
        },
        {
            month: "Maret",
            tasks: [
                {
                    title: "Case Study",
                    details: ["Case Study"],
                    note: "Link materi",
                    tugas: ["Buat Case Study"]
                },
                {
                    title: "Finalisasi Proyek 30 Hari",
                    note: "PPT Pitching, Hasil Observasi, Use Case, Case Study, Prototype"
                }
            ]
        },
        {
            month: "April",
            tasks: [
                {
                    title: "Prototype",
                    details: ["Figma Prototype", "Iterative Prototype"],
                    note: "Link materi",
                    tugas: ["Prototype our project!"]
                }
            ]
        },
        {
            month: "Mei",
            tasks: [
                {
                    title: "Prototype",
                    details: ["Figma Prototype", "Iterative Prototype"],
                    note: "Link materi",
                    tugas: ["Prototype our project!"]
                }
            ]
        },
        {
            month: "Juni",
            tasks: [
                {
                    title: "Prototype",
                    details: ["Figma Prototype", "Iterative Prototype"],
                    note: "Link materi",
                    tugas: ["Prototype our project!"]
                }
            ]
        }
    ];

    return (
        <div className="timeline-container">
            <div className="timeline">
                {timelineData.map((item, index) => (
                    <div key={index} className="timeline-item" style={{ left: `${index * 25}%` }}>
                        <div className="timeline-month">
                            <span>{item.month}</span>
                        </div>
                        <div className="timeline-content">
                            {item.tasks.map((task, i) => (
                                <div key={i} className="task-card">
                                    <h3>{task.title}</h3>
                                    {task.details && (
                                        <ul>
                                            {task.details.map((detail, j) => (
                                                <li key={j}>{detail}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {task.tugas && (
                                        <ul>
                                            {task.tugas.map((tugas, k) => (
                                                <li key={k}>{tugas}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {task.note && <p><b>Note:</b> {task.note}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
