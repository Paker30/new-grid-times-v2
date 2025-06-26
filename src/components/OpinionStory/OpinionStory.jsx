import React from 'react';
import styled from 'styled-components';

import { QUERIES } from '../../constants'

const OpinionStory = ({ id, title, author, avatar, className }) => {
  return (
    <Link href={`/story/${id}`} className={className}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </Link>
  );
};


const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  ${Avatar} {
    margin-left: 16px;
  }

  @media ${QUERIES.tabletOnly} {
    flex-direction: column;
    ${Avatar} {
      margin-left: 0px;
    }
  }
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

const Link = styled.a``;

export default OpinionStory;
