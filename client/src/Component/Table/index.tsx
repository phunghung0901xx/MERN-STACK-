import styles from './styles.module.css'
import React, { FC, memo } from 'react'



type Item = {
    _id?: any
    genre?: string[]
    year?: number
    name?: string[]
    img?: string
    rating?: number
    dummy?:any


}
const Table: FC<Item> = (data) => {
    const { dummy } = data
    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <p className={styles.title_tab}>Title</p>
                    <p className={styles.genre_tab}>Genre</p>
                    <p className={styles.rating_tab}>Rating</p>
                </div>
                {dummy?.map((item: Item) => (
                    <div className={styles.item} key={item._id}>
                        <div className={styles.title_container}>
                            <img src={item.img} alt="item" className={styles.item_img} />
                            <p className={styles.item_title}>
                                {item.name} ({item.year})
                            </p>
                        </div>
                        <div className={styles.genre_container}>
                            {item?.genre?.map((genre: string, index: Number) => (
                                <p key={genre} className={styles.item_genre}>
                                    {genre}
                                    {/* {index !== item.genre.length - 1 && "/"} */}
                                </p>
                            ))}
                        </div>
                        <div className={styles.rating_container}>
                            <img
                                src="./images/star.png"
                                alt="star"
                                className={styles.star_img}
                            />
                            <p className={styles.item_rating}>{item?.rating}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default memo(Table)