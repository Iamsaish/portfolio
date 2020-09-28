import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle } from '../../styles';
import {PublicationItem, PublicationTitle} from './styles';

const Publications=({user})=>{
    return(
        <Layout user={user}>
            <div>
                <SectionTitle>Publications</SectionTitle>
                <ul>
                {user.publications.map((publication, i)=>(
                    <PublicationItem key={i}>
                        <PublicationTitle>{publication.name}</PublicationTitle>
                        <p><em>{publication.publisher}</em>-{publication.releaseDate}</p>
                        <br/>
                        <p>{publication.summary}</p>
                        <p><a href={publication.website} target="_blank" rel="noopener noreferrer">Visit Published Paper</a></p>
                    </PublicationItem>
                ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Publications;