import styles from './styles.module.css'
import React, { FC, memo } from 'react'

type Search = {
    setSearch: () => void
}
const Search: FC<Search> = ({ setSearch }) => {
    return (
        <>
            <input
                type="text"
                className={styles.search}
                placeholder='Search'
                onChange={(e:any) => {
                    // setSearch(e.target.value)
                }}
            />
        </>
    )
}
export default memo(Search)