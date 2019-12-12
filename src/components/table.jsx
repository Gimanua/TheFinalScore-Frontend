import React from 'react';
import './css/table.css';



export default function Table(){
return (
    <div className="List">
      <h1>The Final Score</h1>
      <table>
        <thead>
          <th>Title</th>
          <th>Year</th>
          <th>Actor</th>
          <th>Plot</th>
          <th>FINALSCORE</th>
          <th>Type</th>
          <th></th>
        </thead>
        <tbody>
        <tr>
            <td>
              Star wars
            </td>
            <td>
              1977
            </td>
            <td>
              Mark Hamill, Carrie Fisher, Harrison Ford
            </td>
            <td>
                Lorem ipsum
            </td>
            <td>
              89,67
            </td>
            <td>
              Movie
            </td>
            <td>❌</td>
          </tr>
          <tr>
            <td>
              Star wars
            </td>
            <td>
              1977
            </td>
            <td>
              Mark Hamill, Carrie Fisher, Harrison Ford
            </td>
            <td>
                Lorem ipsum
            </td>
            <td>
              89,67
            </td>
            <td>
                Movie
            </td>
            <td>❌</td>
          </tr>
          <tr>
            <td>
              Star wars
            </td>
            <td>
              1977
            </td>
            <td>
              Mark Hamill, Carrie Fisher, Harrison Ford
            </td>
            <td>
                Lorem ipsum
            </td>
            <td>
              89,67
            </td>
            <td>
                Movie
            </td>
            <td>❌</td>
          </tr>
          <tr>
            <td>
              Star wars
            </td>
            <td>
              1977
            </td>
            <td>
              Mark Hamill, Carrie Fisher, Harrison Ford
            </td>
            <td>
                Lorem ipsum
            </td>
            <td>
              89,67
            </td>
            <td>
                Movie
            </td>
          <td>❌</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}