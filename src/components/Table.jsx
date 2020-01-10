import React from 'react';
import './scss/table.scss';


/**
 * This print the list (a table) of a logged in user
 */
export default function Table() {
  if ( localStorage.getItem('token')!= null){
  return (
    <div className="List">
      <h1>The Final Score</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Actor</th>
            <th>Plot</th>
            <th>FINALSCORE</th>
            <th>Type</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Star wars</td>
            <td>1977</td>
            <td>Mark Hamill, Carrie Fisher, Harrison Ford</td>
            <td>Lorem ipsum</td>
            <td>89,67</td>
            <td>Movie</td>
            <td>❌</td>
          </tr>

          <tr>
            <td>Star wars</td>
            <td>1977</td>
            <td>Mark Hamill, Carrie Fisher, Harrison Ford</td>
            <td>Lorem ipsum</td>
            <td>89,67</td>
            <td>Movie</td>
            <td>❌</td>
          </tr>

          <tr>
            <td>Star wars</td>
            <td>1977</td>
            <td>Mark Hamill, Carrie Fisher, Harrison Ford</td>
            <td>Lorem ipsum</td>
            <td>89,67</td>
            <td>Movie</td>
            <td>❌</td>
          </tr>

          <tr>
            <td>Star wars</td>
            <td>1977</td>
            <td>Mark Hamill, Carrie Fisher, Harrison Ford</td>
            <td>Lorem ipsum</td>
            <td>89,67</td>
            <td>Movie</td>
            <td>❌</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
else{
  return(
    <div>
      <h1>You need to log in to view your list</h1>
    </div>
  )
}
}