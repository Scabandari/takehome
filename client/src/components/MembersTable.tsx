import styled from '@emotion/styled';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { deleteUserRequest } from '../store/actions/userActions';
import Dropdown from './Dropdown';
import SmallPlusCircleSvg from '../assets/small-plus.svg';
import { FlexRow } from '../styled';
import Svg from './Svg';

const StyledBackground = styled.div`
  box-sizing: border-box;
  width: 984px;
  height: 366px;
  gap: 16px;

  @media (max-width: 1511px) {
    width: 984px;
  }

  @media (min-width: 1512px) and (max-width: 1919px) {
    width: 1216px;
  }

  @media (min-width: 1920px) {
    width: 1280px;
  }
`;

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-rows: 86px 1fr;
  width: 100%;
`;

const StyledHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTitle = styled.div`
  font-size: 32px;
  font-weight: 400;
  font-family: ${(props) => props.theme.fonts.secondary};
  line-height: 100%;
`;

const StyledSubtitle = styled.div`
  font-size: 16px;
  font-weight: ${(props) => props.theme.fontSizes.large};
  font-family: ${(props) => props.theme.fonts.primary};
  line-height: 28px;
`;

const StyledAddTeamMemberButton = styled.button`
  width: 207px;
  height: 44px;
  background-color: #f5b588;
  color: black;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: ${(props) => props.theme.lineHeights.small};
  border: none;
  padding: 12px;
  border-radius: ${(props) => props.theme.radii.medium};
  cursor: pointer;
`;

const StyledTableWrapper = styled.div`
  box-sizing: border-box;
  background-color: #ededec;
  padding: 16px 12px 16px 12px;
  border-radius: 2px;
`;

const StyledTable = styled.table`
  box-sizing: border-box;
  width: 100%;
  border-spacing: 0;
  border-collapse: separate;
  border-radius: 8px;
  padding-left: 5px;
  padding-right: 5px;
`;

const IdHeaderCell = styled.div<{ overideStyles?: string }>`
  box-sizing: border-box;
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: ${(props) => props.theme.lineHeights.small};
  font-weight: 500;
  padding: 8px 0;
  padding-left: 10px;
  display: flex;
  align-items: center;

  width: 80px;

  @media (min-width: 1511px) {
    width: 80px;
  }
  ${(props) => props.overideStyles}
`;

const StyledId = styled.td`
  box-sizing: border-box;
  height: 48px;
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: ${(props) => props.theme.lineHeights.small};
  letter-spacing: 0%;
  font-weight: 500;
  vertical-align: middle;
  color: #44463f;
  text-align: left;

  width: 80px;
  text-indent: 5px;
`;

const NameHeaderCell = styled.div<{ overideStyles?: string }>`
  box-sizing: border-box;
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: ${(props) => props.theme.lineHeights.small};
  font-weight: 500;
  padding: 8px 0;
  display: flex;
  align-items: center;
  width: 234px;

  @media (min-width: 1511px) and (max-width: 1919px) {
    width: 350px;
  }

  @media (min-width: 1920px) {
    width: 382px;
  }

  ${(props) => props.overideStyles};
`;

const StyledName = styled.td`
  box-sizing: border-box;
  width: 234px;
  height: 48px;
  padding: 8px 0;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: ${(props) => props.theme.lineHeights.small};
  letter-spacing: 0%;
  font-weight: 500;
  vertical-align: middle;
  color: #44463f;

  @media (min-width: 1511px) and (max-width: 1919px) {
    width: 350px;
  }

  @media (min-width: 1920px) {
    width: 382px;
  }
`;

const LastNameHeaderCell = styled.div<{ overideStyles?: string }>`
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: ${(props) => props.theme.lineHeights.small};
  font-weight: 500;
  padding: 8px 0;
  display: flex;
  align-items: center;
  width: 200px;

  @media (min-width: 1511px) {
    width: 200px;
  }

  ${(props) => props.overideStyles};
`;

const StyledLastName = styled.td`
  box-sizing: border-box;
  width: 148px;
  height: 48px;
  padding: 8px 0;
  width: 200px;
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: ${(props) => props.theme.lineHeights.small};
  letter-spacing: 0%;
  font-weight: 500;
  vertical-align: middle;
  color: #44463f;

  @media (min-width: 1511px) {
    width: 200px;
  }
`;

const StyledEmptyHeaderCell = styled.div`
  box-sizing: border-box;
  width: 72px;
`;

const StyledDropdown = styled.td`
  box-sizing: border-box;
  text-align: right;
  width: 72px;
`;

const DobHeaderCell = styled.div<{ overideStyles?: string }>`
  box-sizing: border-box;
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: ${(props) => props.theme.lineHeights.small};
  font-weight: 500;
  padding: 8px 0;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 134px;

  ${(props) => props.overideStyles};
`;

const StyledDob = styled.td`
  box-sizing: border-box;
  height: 48px;
  padding: 8px 0;
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: ${(props) => props.theme.lineHeights.small};
  letter-spacing: 0%;
  font-weight: 500;
  vertical-align: middle;
  color: #44463f;
  text-align: right;
  width: 132px;
`;

const StyledTableHeaderRow = styled.div`
  display: flex;
  background-color: #ffffff;
  color: #2c747e;
  border-radius: 8px;
  height: 48px;
  height: 40px;
`;

interface TableProps {
  setFormPanel: (value: boolean) => void;
  setEditingUserId: (value: number | null) => void;
}

const MembersTable = ({ setFormPanel, setEditingUserId }: TableProps) => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);
  const { success } = useSelector((state: RootState) => state.users.deleteUser);

  useEffect(() => {
    if (success) {
      toast.success('Team member removed');
    }
  }, [success]);

  return (
    <StyledBackground>
      <StyledGridContainer>
        <StyledHeaderRow>
          <div>
            <StyledTitle>Team Member</StyledTitle>
            <StyledSubtitle>Manage your team members below.</StyledSubtitle>
          </div>
          <StyledAddTeamMemberButton
            onClick={() => {
              setEditingUserId(null);
              setFormPanel(true);
            }}
          >
            <FlexRow>
              <Svg styles='margin-right: 8px;' src={SmallPlusCircleSvg} />
              Add New Team Member
            </FlexRow>
          </StyledAddTeamMemberButton>
        </StyledHeaderRow>
        <StyledTableWrapper>
          <StyledTableHeaderRow>
            <IdHeaderCell>ID</IdHeaderCell>
            <NameHeaderCell>USERNAME</NameHeaderCell>
            <NameHeaderCell>FIRST NAME</NameHeaderCell>
            <LastNameHeaderCell>
              <div>LAST NAME</div>
            </LastNameHeaderCell>
            <DobHeaderCell overideStyles='text-align: right;'>
              <div>DATE OF BIRTH</div>
            </DobHeaderCell>
            <StyledEmptyHeaderCell></StyledEmptyHeaderCell>
          </StyledTableHeaderRow>
          <StyledTable>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <StyledId>{`  ${user.id}`}</StyledId>
                  <StyledName>{user.user_name}</StyledName>
                  <StyledName>{user.first_name}</StyledName>
                  <StyledLastName>{user.last_name}</StyledLastName>
                  <StyledDob>
                    {user.date_of_birth
                      ? user.date_of_birth.replace(/-/g, '/')
                      : ''}
                  </StyledDob>
                  <StyledDropdown>
                    <Dropdown
                      userId={user.id}
                      onEdit={() => {
                        setEditingUserId(user.id);
                        setFormPanel(true);
                      }}
                      onDelete={() => {
                        dispatch(deleteUserRequest(user.id));
                      }}
                    />
                  </StyledDropdown>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </StyledTableWrapper>
      </StyledGridContainer>
    </StyledBackground>
  );
};

export default MembersTable;
