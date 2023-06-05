import { useState, useEffect } from "react";
import axios from "axios";
import blogfetch from "../axios/config";

import { Link } from "react-router-dom" ;

import "./Home.css" ;

const Home = () => {

    const [posts, setposts] = useState([])

    const getPosts = async() => {
        
        try {

            const response = await blogfetch.get('/posts')

            const data = response.data ;

            setposts(data)

        } catch(error) {
            console.log(response)

        } 

    }

    useEffect(() => {

        getPosts() ;

    })

    return (
        <div className="Home">
        <h1>Últimos Posts</h1>
        {posts.length === 0 ? <p>Carregando...</p> : ( posts.map((posts) => (
            <div className="post" key={posts.id}>
                <h2>{posts.title}</h2>
                <p>{posts.body}</p>

                <Link to={`/posts/${posts.id}`} className="btn"> Ler Mais</Link>
            </div>
        ))) }
        </div>
      
    )
}

export default Home ;