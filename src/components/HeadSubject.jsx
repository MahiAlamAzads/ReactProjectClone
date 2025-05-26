import styles from './HeadSubject.module.css'
const HeadSubject = ({text})=>{
    return(
        <>
            <h2 className={`${styles.headSub} pb-5`}>{text}</h2>
        </>
    )
}
export default HeadSubject