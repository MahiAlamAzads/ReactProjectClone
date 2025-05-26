import styles from './heading.module.css'
const Heading = ({text})=>{
    return(
        <>
            <h4 className={`${styles.heading} mb-4`}>{text}</h4>
        </>
    )
}
export default Heading