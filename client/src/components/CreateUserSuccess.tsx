import styled from '@emotion/styled';

import SuccessImg from '../assets/add-success.png';
import { StyledButton } from '../styled';

const StyledContainer = styled.div`
  border-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 392px;
  height: 571px;
  margin: auto;
  padding-bottom: 150px;
`;

const StyledMsg = styled.div`
  font-size: 32px;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1px;
  text-align: center;
  margin-bottom: 24px;
`;

const StyledText = styled.div`
  padding: 8px 0;
`;

const CreateUserSuccess = ({
  addAnotherTeamMember,
  close,
}: {
  addAnotherTeamMember: () => void;
  close: () => void;
}) => {
  return (
    <StyledContainer>
      <StyledContent>
        <img src={SuccessImg} alt='Success' />

        <StyledMsg>
          <StyledText>
            Team member <br />
          </StyledText>
          <div>successfully added. </div>
        </StyledMsg>
        <br />
        <StyledButton
          backgroundColor='#1A1B18'
          submitTextColor='#F8F9F7'
          styleOverrides='width: 392px;'
          onClick={addAnotherTeamMember}
        >
          Add another member
        </StyledButton>
        <StyledButton
          onClick={() => close()}
          backgroundColor='inherit'
          submitTextColor='#2C747E'
          styleOverrides='width: 392px;'
        >
          View all team members
        </StyledButton>
      </StyledContent>
    </StyledContainer>
  );
};

export default CreateUserSuccess;
