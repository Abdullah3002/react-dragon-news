import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../shared/Header/Header';
import RightSideNav from '../shared/RightSideNav/RightSideNav';
import Navbar from '../shared/Navbar/Navbar';

// Import your news data (if it's a JSON file, you may need to fetch it)
import newsData from '../../../public/news.json'; // Adjust the path as needed

const News = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);

    useEffect(() => {
        // Find the news article by ID
        const foundNews = newsData.find((item) => item._id === id);
        setNews(foundNews);
    }, [id]);

    if (!news) {
        return <p className="text-center text-red-500">News not found</p>;
    }

    return (
        <div>
            <Header />
            <Navbar />
            <div className='grid md:grid-cols-4 gap-4 p-4'>
                {/* News Details Section */}
                <div className='col-span-3 bg-white p-6 rounded-lg shadow-lg'>
                    <img src={news.image_url} alt={news.title} className="w-full object-cover rounded-lg" />
                    <h2 className='text-2xl font-bold mt-4'>{news.title}</h2>
                    <div className='flex items-center gap-3 mt-3'>
                        <img src={news.author.img} alt={news.author.name} className='w-12 h-12 rounded-full' />
                        <div>
                            <p className='font-semibold'>{news.author.name}</p>
                            <p className='text-gray-500 text-sm'>{news.author.published_date}</p>
                        </div>
                    </div>
                    <p className='mt-4 text-gray-700'>{news.details}</p>
                    <p className='mt-2 text-gray-600'>
                        <span className='font-bold'>Rating:</span> {news.rating.number} ({news.rating.badge})
                    </p>
                    <p className='mt-2 text-gray-600'>
                        <span className='font-bold'>Total Views:</span> {news.total_view}
                    </p>
                </div>

                {/* Right Side Navigation */}
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default News;
