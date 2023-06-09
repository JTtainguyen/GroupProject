import { useGlobalContext } from '../../../context/index';
import Book from './Book';
import './BookList.css';
import coverImg from './cover_not_found.jpg';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const { dashboard } = useGlobalContext();
    const booksWithCovers = dashboard.map((singleBook) => {
        return {
            ...singleBook,
            id: singleBook.id[0],
            cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
        };
    });

    return (
        <section className="booklist">
            <div className="container">
                <div className="booklist-content">
                    {booksWithCovers.slice(0, 40).map((item, index) => {
                        return <Book key={index} {...item} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
