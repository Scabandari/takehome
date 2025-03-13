import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Toaster as HotToast } from 'react-hot-toast';
import {
  fetchUsersRequest,
  resetCreateUser,
  resetEditUser,
} from './store/actions/userActions';
import { MembersTable } from './components';
import MemberFormPanel from './components/MemberFormPanel';
import SidebarContent from './components/SidearContent';

const Toaster = () => (
  <HotToast
    reverseOrder={false}
    gutter={8}
    containerClassName=''
    containerStyle={{}}
    toastOptions={{
      position: 'bottom-center',
      success: {
        duration: 2300,
        style: {
          background: '#61C791',
          color: '#fff',
        },
      },
      error: {
        duration: 2300,
        style: {
          background: '#B22222',
          color: '#fff',
        },
      },
    }}
  />
);

const StyledNavbar = styled.div`
  background-color: ${(props) => props.theme.navbar.background};
  border-bottom: 2px solid #ededec;
  height: 60px;
  border-bottom-width: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  padding-right: 8px;
  padding-bottom: 16px;
  padding-left: 24px;
`;

const StyledNameContainer = styled.div`
  height: 20px;
  font-size: 25px;
  font-weight: 360;
  display: flex;
  font-family: ${(props) => props.theme.fonts.primary};
`;

type GridProps = {
  navbarHeight: number;
};

const StyledGrid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: 232px 1fr;
  height: ${(props) => `calc(100vh - ${props.navbarHeight}px)`};
  width: 100%;
  position: relative;
`;

const StyledSideBar = styled.div`
  border-right: 2px solid #ededec;
  height: 100%;
  overflow-y: auto;
  background-color: #f8f9f7;
`;

const StyledMainContent = styled.div`
  box-sizing: border-box;
  background-color: ${(props) => props.theme.navbar.background};
  padding: 32px 32px 48px 32px;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const StyledUserDetails = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: 6px;
  padding-right: 5px;
`;

const StyledUsername = styled.div`
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: ${(props) => props.theme.lineHeights.small};
  vertical-align: middle;
  letter-spacing: 0;
  text-align: right;
`;
const StyledCompany = styled.div`
  text-align: right;
  font-weight: 500;
  color: #585b52;
`;

const StyledUserIcon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: #2c747e;
  border: 2px solid #2c747e;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type OverlayProps = {
  isActive: boolean;
};

const StyledOverlay = styled.div<OverlayProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f4;
  opacity: 80%;
  display: ${(props) => (props.isActive ? 'flex' : 'none')};
  justify-content: flex-end;
  z-index: 10;
`;

function App() {
  const dispatch = useDispatch();
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(60); // Default fallback
  const [showFormPanel, setShowFormPanel] = useState(false); // Control overlay visibility
  const [editingUserId, setEditingUserId] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        const height = navbarRef.current.getBoundingClientRect().height;
        setNavbarHeight(height);
      }
    };

    updateNavbarHeight();

    window.addEventListener('resize', updateNavbarHeight);

    return () => {
      window.removeEventListener('resize', updateNavbarHeight);
    };
  }, []);

  return (
    <div>
      <StyledNavbar ref={navbarRef}>
        <StyledNameContainer>Company Name</StyledNameContainer>
        <StyledUserDetails>
          <div>
            <StyledUsername>Cate Blanchett</StyledUsername>
            <StyledCompany>ACME Incorporated</StyledCompany>
          </div>
          <StyledUserIcon>CB</StyledUserIcon>
        </StyledUserDetails>
      </StyledNavbar>
      <StyledGrid navbarHeight={navbarHeight}>
        <StyledSideBar>
          <SidebarContent />
        </StyledSideBar>
        <StyledMainContent>
          <MembersTable
            setEditingUserId={setEditingUserId}
            setFormPanel={setShowFormPanel}
          />
        </StyledMainContent>
      </StyledGrid>

      <StyledOverlay isActive={showFormPanel} />

      {showFormPanel && (
        <MemberFormPanel
          close={() => {
            setShowFormPanel(false);
            dispatch(resetCreateUser());
            dispatch(resetEditUser());
          }}
          editingUserId={editingUserId}
        />
      )}
      <Toaster />
    </div>
  );
}

export default App;
