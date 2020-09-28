
import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle } from '../../styles';
import { WorkItem, WorkTitle, JobTitle } from './styles';

const Work=({user}) =>{
    return(
        <Layout user={user}>
            <div>
                <SectionTitle>Awards</SectionTitle>
                <ul>
                    {user.awards.map((award,i)=>(
                        <WorkItem key={i}>
                            <WorkTitle>{award.title}</WorkTitle>
                            <div>
                                <JobTitle>{award.summary}</JobTitle>
                                <span>&sdot;</span>
                                <span>
                                    {award.date}
                                </span>
                            </div>
                        </WorkItem>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Work;