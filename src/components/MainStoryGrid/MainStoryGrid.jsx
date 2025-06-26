import React from 'react';
import styled from 'styled-components';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import { COLORS, QUERIES } from '../../constants';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

const StyledSecondaryStory = styled(SecondaryStory)``;
const StyledOpinionStory = styled(OpinionStory)``;

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <StyledSecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <StyledOpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;
  @media ${QUERIES.tabletOnly} {
    grid-template-columns: 2fr 1fr;
    column-gap: 36px;
    grid-template-areas:
      'main-story secondary-stories'
      'opinion-stories opinion-stories'
      'advertisement advertisement';
  }
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 36px;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  ${StyledSecondaryStory} {
    padding-top: 16px;
    padding-bottom: 16px;
    &:not(:first-child) {
      border-top: 1px solid ${COLORS.gray[300]};
    };
  };
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  ${StyledOpinionStory} {
    padding-top: 16px;
    padding-bottom: 16px;
    &:not(:first-child) {
      border-top: 1px solid ${COLORS.gray[300]};
    };
  };
  @media ${QUERIES.tabletOnly} {
    ${StoryList} {
      // display: grid;
      // grid-template-columns: repeat(4, 172px);
      flex-direction: row;
      justify-content: space-between;
    }

    ${StyledOpinionStory} {
      &:not(:first-child) {
        border-top: none;
      };
    };
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;
