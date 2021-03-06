import React from 'react';
import {useLocation} from 'react-router-dom';
import {ArrowDownRight16} from '@carbon/icons-react';
import {Header, HeaderContainer, ViewResumeLink, Image} from './styles';

const UserHeader=({user})=>{
    const location= useLocation();

    return(
        <HeaderContainer isHome={location.pathname === '/'}>
            <Header>
                <Image src= {user.basics.picture}/>
                <div>
                <h2>{user.basics.name}</h2>
                <h4>
                    <a href= {`https://gitconnected.com/${user.basics.username}`}
                    target="_blank"
                    rel="noreferrer noopener">
                        @{user.basics.username}
                    </a>
                </h4>
                <p>{user.basics.label}</p>
                <p>Living in {user.basics.region}</p>
                <p>{user.basics.headline}</p>
                </div>
            </Header>
            <div>
                <ViewResumeLink href={`https://gitconnected.com/${user.basics.username}/resume`}
                target="_blank"
                rel="noopener noreferrer">
                    <span>View Resume</span>
                    <ArrowDownRight16/>
                </ViewResumeLink>
            </div>
        </HeaderContainer>
    )
}

export default UserHeader;