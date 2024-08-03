import React from 'react';
import styled from 'styled-components';
import { calendarData } from '\./ActivityData';

const CalendarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #ff8c00;
  }
`;

const MonthColumn = styled.div`
  width: 22%;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 0;
    right: -15px;
    width: 2px;
    height: 100%;
    background-color: #ff8c00;
  }
`;

const MonthTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #ff8c00;
`;

const Item = styled.div`
  margin-bottom: 20px;
`;

const ItemTitle = styled.h3`
  background-color: #ff8c00;
  color: white;
  padding: 8px;
  border-radius: 4px;
  text-align: center;
`;

const ItemNote = styled.a`
  display: block;
  margin-top: 10px;
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const Task = styled.li`
  margin: 5px 0;
`;

const Calendar = () => {
  return (
    <CalendarContainer>
      {calendarData.map((month) => (
        <MonthColumn key={month.month}>
          <MonthTitle>{month.month}</MonthTitle>
          {month.items.map((item, index) => (
            <Item key={index}>
              <ItemTitle>{item.title}</ItemTitle>
              {item.materials && (
                <>
                  <h4>Materi:</h4>
                  <TaskList>
                    {item.materials.map((material, idx) => (
                      <Task key={idx}>{material}</Task>
                    ))}
                  </TaskList>
                </>
              )}
              {item.note && <ItemNote href="#">{item.note}</ItemNote>}
              {item.tasks && (
                <>
                  <h4>Tugas:</h4>
                  <TaskList>
                    {item.tasks.map((task, idx) => (
                      <Task key={idx}>{task}</Task>
                    ))}
                  </TaskList>
                </>
              )}
            </Item>
          ))}
        </MonthColumn>
      ))}
    </CalendarContainer>
  );
};

export default Calendar;
