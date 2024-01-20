import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
  hasBig?: boolean
}

export function Avatar({hasBorder = true, hasBig=false, ...props}: AvatarProps) {
  return (
    <img
      className={hasBorder ? hasBig ? styles.avatarBig : styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  )
}
