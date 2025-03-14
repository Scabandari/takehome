import { useFormik } from 'formik';
import * as yup from 'yup';
import styled from '@emotion/styled';
import { StyledButton } from '../styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import CreateUserSuccess from '../components/CreateUserSuccess';
import { resetCreateUser } from '../store/actions/userActions';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const StyledFormPanel = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 488px;
  background-color: #f8f9f7;
  height: 100%;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 11;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 392px;
  height: 56px;
  border: 1px solid #ddd;
  border-radius: ${(props) => props.theme.radii.medium};
  padding: 4px 6px 4px 6px;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.medium};
  &:focus {
    outline: none;
  }
`;

const ErrorText = styled.div`
  box-sizing: border-box;
  color: #d32f2f;
  font-size: 12px;
  margin-top: 3px;
`;

const StyledControlBar = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const StyledButtonContainer = styled.div`
  box-sizing: border-box;
  border-top: 1px solid #dfe0dc;
  height: 88px;
  width: 100%;
  padding: 16px;
`;

const StyleCloseButton = styled.button`
  border: 1.5px solid #1a1b18;
  color: #1a1b18;
  height: 33.33px;
  width: 33.33px;
  border-radius: 100%;
  background-color: inherit;
  margin-top: 12px;
  margin-left: 12px;
`;

const FlexColumn = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const StyledTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  height: 56px;
  width: 392px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 32px;
  line-height: 100%;
  letter-spacing: -1px;
  font-weight: 400;
`;

const StyledMiddleSection = styled.div`
  width: 392px;
  height: 402px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 0px;
`;

const validationSchema = yup.object({
  username: yup.string().required('Username is required'),
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  dob: yup
    .string()
    .matches(/^\d{4}-\d{2}-\d{2}$|^$/, 'Date must be in format yyyy-mm-dd'),
});

interface InitialValues {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  dob: string | undefined;
}

const blankInitialValues = {
  username: '',
  firstName: '',
  lastName: '',
  dob: '',
};

interface MemberFormProps {
  close: () => void;
  initialValues?: InitialValues;
  title: string;
  submitText: string;
  submitColor: string;
  submitTextColor?: string;
  handleSubmit: (values: InitialValues) => void;
  submitIcon?: () => JSX.Element;
}

const MemberForm = ({
  close,
  initialValues,
  handleSubmit,
  title,
  submitText,
  submitColor,
  submitTextColor,
  submitIcon,
}: MemberFormProps) => {
  const dispatch = useDispatch();
  const { success: createUserSuccess } = useSelector(
    (state: RootState) => state.users.createUser
  );

  const { success: updateUserSuccess } = useSelector(
    (state: RootState) => state.users.updateUser
  );

  useEffect(() => {
    if (createUserSuccess === false || updateUserSuccess === false) {
      toast.error('An error occurred');
    }
  }, [createUserSuccess, updateUserSuccess]);

  const formik = useFormik({
    initialValues: initialValues || blankInitialValues,
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values as any);
    },
  });

  const addAnotherTeamMember = () => {
    dispatch(resetCreateUser());
  };

  const renderContent = () => {
    if (createUserSuccess) {
      return (
        <CreateUserSuccess
          close={close}
          addAnotherTeamMember={addAnotherTeamMember}
        />
      );
    } else {
      return (
        <>
          <StyledMiddleSection>
            <StyledTitle>{title}</StyledTitle>
            <div>
              <StyledInput
                id='username'
                name='username'
                type='text'
                placeholder=' Username'
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.username && formik.errors.username && (
                <ErrorText>{formik.errors.username}</ErrorText>
              )}
            </div>
            <div>
              <StyledInput
                id='firstName'
                name='firstName'
                type='text'
                placeholder=' First Name'
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <ErrorText>{formik.errors.firstName}</ErrorText>
              )}
            </div>
            <div>
              <StyledInput
                id='lastName'
                name='lastName'
                type='text'
                placeholder=' Last Name'
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <ErrorText>{formik.errors.lastName}</ErrorText>
              )}
            </div>
            <StyledInput
              id='dob'
              name='dob'
              type='text'
              placeholder=' Date of Birth (optional)  yyyy-mm-dd'
              value={formik.values.dob}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.dob && formik.errors.dob && (
              <ErrorText>{formik.errors.dob}</ErrorText>
            )}
          </StyledMiddleSection>
          {submitIcon && submitIcon()}
          <StyledButtonContainer>
            <StyledButton
              backgroundColor={submitColor}
              submitTextColor={submitTextColor}
              type='submit'
            >
              {submitIcon && submitIcon()}
              {submitText}
            </StyledButton>
          </StyledButtonContainer>
        </>
      );
    }
  };

  return (
    <StyledFormPanel>
      <form onSubmit={formik.handleSubmit}>
        <FlexColumn>
          <StyledControlBar>
            <StyleCloseButton onClick={close}>✕</StyleCloseButton>
          </StyledControlBar>
          {renderContent()}
        </FlexColumn>
      </form>
    </StyledFormPanel>
  );
};

export default MemberForm;
