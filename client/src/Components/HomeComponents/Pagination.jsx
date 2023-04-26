import styles from './Pagination.module.css'

function Pagination({gamesPerPage, currentPage, setCurrentPage, totalGames}){

    //Vars 
    const pageNumbers = []

    //Loop
    for(let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++){
        pageNumbers.push(i)
    }

    //Functions
    const previousPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const nextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const specificPage = (pageNum) =>{
        setCurrentPage(pageNum)
    }

    return(
    <nav className={styles.majorContainer}>
       <button data-testid='button-1'
        onClick={previousPage}
        className={(currentPage === 1) 
        ? 
        styles.disable 
        : 
        styles.able}>Previous page</button>
        <ul className={styles.list}>
        {
            pageNumbers.map(page => {
                return( 
                <li key={page}>
                    <a 
                    className={(page === currentPage) ? styles.current : styles.pages}
                    onClick={() => specificPage(page)}
                    >{page}</a>
                </li>)
            })
        }
        </ul>
        <button onClick={nextPage} 
        className={(currentPage >= pageNumbers.length)
        ? 
        styles.disable
        :
        styles.able}
        >Next Page</button>
    </nav>
    )
}


export default Pagination