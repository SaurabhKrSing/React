import styles from "./Item.module.css"

const Item = ({ foodItem }) => {
  return (
    <div>
      <li className={`${styles['kg-item']} list-group-item`} > <span className={styles['kg-item']}>{foodItem}</span></li >

    </div >
  )
}

export default Item
