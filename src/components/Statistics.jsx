import React from 'react';
import PropTypes from "prop-types";

const Statistics = ({title, stats}) => {
  return (
    <section class="statistics">
  <h2 class="title">{title}</h2>

  <ul class="stat-list">

    {stats.map(s=> (
        <li key={s.id}class="item">
        <span class="label">{s.label} </span>
        <span class="percentage">{s.percentage}</span>
      </li>
    ))}

  </ul>
</section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array
}

export default Statistics