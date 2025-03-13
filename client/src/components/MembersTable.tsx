import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Dropdown from './Dropdown';
import { deleteUserRequest } from '../store/actions/userActions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const StyledBackground = styled.div`
  width: 984;
  height: 366;
  max-width: 1280px;
  gap: 16px;
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
  width: 100%;
  border-spacing: 0;
  border-collapse: separate;
  border-radius: 8px;
`;

const StyledId = styled.td`
  width: 80px;
  height: 48px;
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: ${(props) => props.theme.lineHeights.small};
  letter-spacing: 0%;
  font-weight: 500;
  vertical-align: middle;
  color: #44463f;
  text-align: center;
`;

const StyledName = styled.td`
  width: 350px;
  height: 48px;
  padding: 2px 8px 2px 8px;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: ${(props) => props.theme.lineHeights.small};
  letter-spacing: 0%;
  font-weight: 500;
  vertical-align: middle;
  color: #44463f;
`;

const StyledLastName = styled.td`
  width: 350px;
  height: 48px;
  padding: 2px 8px 2px 8px;
  min-width: 132;
  max-width: 200px;
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: ${(props) => props.theme.lineHeights.small};
  letter-spacing: 0%;
  font-weight: 500;
  vertical-align: middle;
  color: #44463f;
`;

const StyledDob = styled.td`
  width: 132px;
  height: 48px;
  padding: 2px 8px 2px 8px;
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: ${(props) => props.theme.lineHeights.small};
  letter-spacing: 0%;
  font-weight: 500;
  vertical-align: middle;
  color: #44463f;
`;

const StyledTableHeaderRow = styled.tr`
  background-color: #ffffff;
  color: #2c747e;
`;

const StyledTableHead = styled.thead`
  border-radius: 8px 8px 0 0;
  overflow: hidden;

  th:first-of-type {
    border-top-left-radius: 8px;
  }

  th:last-of-type {
    border-top-right-radius: 8px;
  }
`;

const DotsButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &::after {
    content: '⋮';
    font-size: 20px;
    line-height: 1;
  }
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
            Add Team Member
          </StyledAddTeamMemberButton>
        </StyledHeaderRow>
        <StyledTableWrapper>
          <StyledTable>
            <StyledTableHead>
              <StyledTableHeaderRow>
                <StyledId>
                  <div style={{ borderRadius: '8px !important' }}>ID</div>
                </StyledId>
                <StyledName>USERNAME</StyledName>
                <StyledName>FIRST NAME</StyledName>
                <StyledLastName>LAST NAME</StyledLastName>
                <StyledDob>DATE OF BIRTH</StyledDob>
                <th />
              </StyledTableHeaderRow>
            </StyledTableHead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <StyledId>{user.id}</StyledId>
                  <StyledName>{user.user_name}</StyledName>
                  <StyledName>{user.first_name}</StyledName>
                  <StyledLastName>{user.last_name}</StyledLastName>
                  <StyledDob>{user.date_of_birth}</StyledDob>
                  <td>
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
                  </td>
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
