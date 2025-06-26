import React from 'react';
import styled from 'styled-components';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import { COLORS, QUERIES } from '../../constants';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';

const StyledMiniStory = styled(MiniStory)``;

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <StyledSectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </StyledSectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <StyledMiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  grid-template-areas:
      'market-section'
      'sports-section';
  @media ${QUERIES.laptopAndUp}{
    grid-template-areas:
      'market-section sports-section';
    grid-template-columns: 1fr 1fr;
  }
`;

const MarketsSection = styled.section`
  // grid-area: market-section;
  @media ${QUERIES.laptopAndUp}{
    padding-right: 16px;
    border-right: 1px solid ${COLORS.gray[300]};
  }
`;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`;

const SportsSection = styled.section`
  grid-area: sports-section;
  display: grid;
  grid-template-areas:
    'section-title'
    'sport-stories';
  @media ${QUERIES.laptopAndUp}{
    margin-left: -16px;
  }
`;

const SportsStories = styled.div`
  grid-area: sport-stories;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  @media ${QUERIES.tabletAndUp}{
    display: flex;
    overflow: auto;
    scrollbar-width: none;
    ${StyledMiniStory}{
      min-width: 220px;
    }
  }
`;

const StyledSectionTitle = styled(SectionTitle)`
  grid-area: section-title;
`;

export default SpecialtyStoryGrid;
