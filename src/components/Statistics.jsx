import React from 'react';

const Statistics = ({title, stats}) => {
  return (
    <section class="statistics">
  <h2 class="title">{title}</h2>

  <ul class="stat-list">

    {stats.map(s=> (
        <li class="item">
        <span class="label">{s.label} </span>
        <span class="percentage">{s.percentage}</span>
      </li>
    ))}

  </ul>
</section>
  )
}

export default Statistics