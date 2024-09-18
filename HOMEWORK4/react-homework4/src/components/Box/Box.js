import classNames from 'classnames'
import styles from './Box.module.css'

export const Box = ({ style, styleToSet, children }) =>
    <div className={classNames(styles.container, style)} style={{...styleToSet}}>{children}</div>;
