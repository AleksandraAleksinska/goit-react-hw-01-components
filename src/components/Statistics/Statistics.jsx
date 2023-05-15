import React from 'react';
import PropTypes from "prop-types";
import css from './Statistics.module.css'

const Statistics = ({title, stats}) => {
  return (
  <section class={css.statistics}>
    {title !== '' && (<h2 class={css.title}>{title}</h2>)}
    

    <ul class={css.statList}>

    {stats.map(s=> (
        <li key={s.id}class={css.item}>
        <span class={css.label}>{s.label} </span>
        <span class={css.percentage}>{s.percentage}%</span>
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