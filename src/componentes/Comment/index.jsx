import React from 'react';
import UserInfo from '../UserInfo';

// Converte data yyyy-MM-dd para dd/mm/yyyy
function formatDate(date) {
  // yyyy-MM-dd
  const [year, month, day] =  date.split('-')    

  // dd/mm/yyyy
  return `${day}/${month}/${year}`;
}

function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }


  
export default Comment;