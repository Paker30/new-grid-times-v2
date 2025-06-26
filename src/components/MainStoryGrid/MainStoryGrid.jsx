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
  @media ${QUERIES.tabletAndUp} {
    border-right: 1px solid ${COLORS.gray[300]};
    margin-right: 0px;
    padding-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  ${StyledSecondaryStory} {
    padding-bottom: 16px;
    &:not(:first-child) {
      padding-top: 16px;
      border-top: 1px solid ${COLORS.gray[300]};
    };
    &:last-child {
      padding-bottom: 0px;
    };
  };

  @media ${QUERIES.tabletAndUp} {
    margin-left: -16px;
  }
  @media ${QUERIES.laptopAndUp} {
    border-right: 1px solid ${COLORS.gray[300]};
    padding-right: 16px;
    margin-bottom: -16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  @media ${QUERIES.tabletOnly} {
    ${StoryList} {
      display: grid;
      grid-template-columns: repeat(4, 172px);
      justify-content: space-between;
    }

    ${StyledOpinionStory} {
      &:not(:first-child) {
        border-top: none;
      };
    };

  }
  @media ${QUERIES.laptopAndUp} {
    margin-left: -16px;
    margin-bottom: -16px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  @media ${QUERIES.laptopAndUp} {
    padding-top: 16px;
    border-top: 1px solid ${COLORS.gray[300]};
  }
`;

export default MainStoryGrid;
