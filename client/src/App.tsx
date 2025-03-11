import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsersRequest } from './store/actions/userActions';

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
  grid-template-columns: 208px 1fr;
  height: ${(props) => `calc(100vh - ${props.navbarHeight}px)`};
  width: 100%;
`;

const StyledSideBar = styled.div`
  border-right: 2px solid #ededec;
  height: 100%; /* Full height */
  overflow-y: auto; /* Allow scrolling if content is too tall */
`;

const StyledMainContent = styled.div`
  background-color: pink;
  height: 100%; /* Full height */
  overflow-y: auto; /* Allow scrolling if content is too tall */
`;

function App() {
  const dispatch = useDispatch();
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(60); // Default fallback

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  // Measure navbar height after render and on window resize
  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        const height = navbarRef.current.getBoundingClientRect().height;
        setNavbarHeight(height);
      }
    };

    // Initial measurement
    updateNavbarHeight();

    // Update on resize
    window.addEventListener('resize', updateNavbarHeight);

    // Clean up
    return () => {
      window.removeEventListener('resize', updateNavbarHeight);
    };
  }, []);

  return (
    <>
      <StyledNavbar ref={navbarRef}>
        <StyledNameContainer>Company Name</StyledNameContainer>
      </StyledNavbar>
      <StyledGrid navbarHeight={navbarHeight}>
        <StyledSideBar>sidebar</StyledSideBar>
        <StyledMainContent>content</StyledMainContent>
      </StyledGrid>
    </>
  );
}

export default App;
