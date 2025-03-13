import styled from '@emotion/styled';
import AddDashboard from '../assets/widget-add-dashboard.png';
import Rewards from '../assets/rewards.png';
import UserGroup from '../assets/users-group.png';
import ArrowDown from '../assets/round-alt-arrow-down.png';
import RightArrow from '../assets/right-arrow.png';

const StyledContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const StyledSeletions = styled.div`
  margin-top: 20px;
  padding: 10px;
  width: 190px;
`;

const StyledSelectRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-top: 15px;
`;

const StyledSelecItem = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: ${(props) => props.theme.lineHeights.small};
  letter-spacing: 0%;
  color: #1a1b18;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ArrowIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const RightIcon = styled.img`
  width: 24px;
  height: 20px;
`;

const StyledRewardsSection = styled.div`
  box-sizing: border-box;
  width: 208px;
  height: 132px;
  margin-bottom: 20px;
  padding: 10px;
  display: grid;
  grid-template-rows: 1fr 4fr;

  border: 1px solid #777a71;
  border-radius: 12px;

  border-right: 2px solid #ededec;
  box-shadow: 4px 4px 0 0 #f5b588;
`;

const StyledRewardsTextSection = styled.div`
  display: grid;
  grid-template-rows: 1fr 1.5fr 1fr;
  margin-top: 8px;
`;

const StyledYouHave = styled.div`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: ${(props) => props.theme.lineHeights.small};
  letter-spacing: 0%;
  font-weight: 500;
  color: #1a1b18;
`;

const StyledPoints = styled.div`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: ${(props) => props.theme.fontSizes.large};
  line-height: ${(props) => props.theme.lineHeights.medium};
  letter-spacing: -2%%;
  font-weight: 400;
  color: #1a1b18;
  margin-top: -2px;
`;

const StyledExplore = styled.div`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: ${(props) => props.theme.lineHeights.small};
  letter-spacing: 0%;
  font-weight: 600;
  color: #2c747e;
  margin-top: -3px;
  display: flex;
  aligh-items: center;
`;

const SidebarContent = () => {
  return (
    <StyledContainer>
      <StyledSeletions>
        <StyledSelectRow>
          <img src={AddDashboard} alt='Dashboard' />
          <StyledSelecItem>Dashboard</StyledSelecItem>
        </StyledSelectRow>

        <StyledSelectRow>
          <img src={UserGroup} alt='Team Members' />
          <FlexRow>
            <StyledSelecItem>Team Members</StyledSelecItem>
            <ArrowIcon src={ArrowDown} alt='Arrow down to select' />
          </FlexRow>
        </StyledSelectRow>

        <StyledSelectRow>
          <img src={Rewards} alt='Rewards' />
          <FlexRow>
            <StyledSelecItem>Rewards</StyledSelecItem>
            <ArrowIcon src={ArrowDown} alt='Arrow down to select' />
          </FlexRow>
        </StyledSelectRow>
      </StyledSeletions>
      <StyledRewardsSection>
        <img src={Rewards} alt='Rewards' />
        <StyledRewardsTextSection>
          <StyledYouHave>You have</StyledYouHave>
          <StyledPoints>4,500 points</StyledPoints>
          <StyledExplore>
            Explore Rewards <RightIcon src={RightArrow} alt='Right Arrow' />
          </StyledExplore>
        </StyledRewardsTextSection>
      </StyledRewardsSection>
    </StyledContainer>
  );
};

export default SidebarContent;
