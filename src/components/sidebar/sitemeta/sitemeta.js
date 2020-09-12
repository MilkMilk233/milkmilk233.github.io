import React from "react"
import { Link } from "gatsby"
import styles from "./sitemeta.module.scss"

const SiteMeta = ({ title, description }) => {
  return (
    <Link to="/" className={styles["sitemeta"]}>
      <div className={styles["sitemeta__title"]}> {title} </div>
      <div className={styles["sitemeta__description"]}> {description} </div>
    </Link>
  )
}

export default SiteMeta