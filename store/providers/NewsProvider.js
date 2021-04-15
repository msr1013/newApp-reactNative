import React from 'react';
import NewsContext from '../contexts/NewsContext';
import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = '0881ea8456874df1ae52525d6409fb8f';

class NewsProvider extends React.Component {
    state = {
        allNews: [],
        headlines: [],
        sources: [],
        newsDetail: {}
    }

    getNewsFromAPI = async () => {
        try{
            const response = await axios.get(`${BASE_URL}/everything?q=bitcoin&apiKey=${API_KEY}`);
            this.setState({
                ...this.state,
                allNews:response.data.articles
            })
            
        }
        catch(error){
            console.log(error)
        }
    }

    // getSourcesFromAPI = () => {

    // }
   

    // getHeadlinesFromAPI = () => {

    // }

       
    setNewsDetail = (news) => {
        this.setState({
            ...this.state,
            newsDetail:news
        })
    }

    render() {
        return (
            <NewsContext.Provider value={{
                ...this.state,
                getNews:this.getNewsFromAPI,
                // getSources:this.getSourcesFromAPI,
                // getHeadlines:this.getHeadlinesFromAPI,
                setNewsDetail:this.setNewsDetail 
            }}>
                {this.props.children}
            </NewsContext.Provider>
        )
    }
}

export default NewsProvider
