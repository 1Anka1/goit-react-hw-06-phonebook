import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ children }) => {
  const title = 'Task - 2 Contact book';
  return (
    <section className={css.section}>
      <div className={css.container}>
        {title && <h2 className={css.title}>{title}</h2>}
        {children}
      </div>
    </section>
  );
};

Section.prototype = {
  title: PropTypes.string,
};

export default Section;