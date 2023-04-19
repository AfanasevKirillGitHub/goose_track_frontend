import styled from 'styled-components';

export const Input = styled.input`
border-radius: 40px;
border: 1px solid rgba(245, 146, 86, 0.5);
background-color: rgba(253, 247, 242, 1);
outline: none;



@media (max-width: 767px) {
    padding-top: 11px;
    padding-right: 14px;
    padding-bottom: 12px;
    padding-left: 14px;
    height: 40px;
    width: 280px;
    font-weight: 400;
    font-size: 14px;  
    line-height: 1.35;  
    // margin-bottom: 24px;
}
@media (min-width: 768px) {
    padding-top: 14px;
    padding-right: 32px;
    padding-bottom: 13px;
    padding-left: 32px;
    height: 52;
    width: 448px;
    font-weight: 400;
    font-size: 18px;  
    line-height: 1.39;
    // margin-bottom: 40px;
}

`;
export const Button = styled.button`
border-radius: 40px;
border: 2px solid #F59256;
background-color: #F59256;
color: white;
cursor: pointer;
:disabled {
    background-color: rgba(245,146,86,0.5);
    border: none
}

@media (max-width: 767px) {
    // padding-top: 11px;
    // padding-right: 14px;
    // padding-bottom: 12px;
    // padding-left: 14px;
    height: 44px;
    width: 280px;
    font-weight: 500;
    font-size: 20px;  
    line-height: 1.35;  
    margin-bottom: 40px;
    margin-top: 16px;

};
@media (min-width: 768px) {
    // padding-top: 14px;
    // padding-right: 32px;
    // padding-bottom: 13px;
    // padding-left: 32px;
    height: 44px;
    width: 458px;
    font-weight: 500;
    font-size: 20px;  
    line-height: 1.35;
    margin-bottom: 40px;
};
@media (min-width: 1280px) {
    // padding-top: 14px;
    // padding-right: 32px;
    // padding-bottom: 13px;
    // padding-left: 32px;
    height: 48px;
    // width: 458px;
    // font-weight: 400;
    // font-size: 18px;  
    // line-height: 1.39;
};
`
export const InnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);

@media (max-width: 767px) {
    width: 100%;
    height: 100vh
};
@media (min-width: 768px) {
    background-color: #FFF;
    padding-top: 60px;
    padding-right: 80px;
    padding-bottom: 60px;
    padding-left: 80px;
    width: 608;
    height: 583;
    border-radius: 40px;
}
@media (min-width: 1280px) {
    width: 618px;
    // height: 587px;
};

`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const Title = styled.h2`
    margin-bottom: 13px;

@media (max-width: 767px) {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.375;
    
};
@media (min-width: 768px) {
    font-weight: 500;
    font-size: 36px;
    line-height: 1.36;
};

`
export const Div = styled.div`
position: relative;
@media (max-width: 767px) { 
    margin-bottom: 24px;
};
@media (min-width: 768px) { 
    margin-bottom: 40px;
};
`
export const Notification = styled.span`
position: absolute;
font-size: 12px;
left: 20px;
bottom: -40%;
`
export const Google = styled.a`
 margin-bottom: 13px;
 height: 24px

`
export const Eye = styled.span`
    position: absolute;
    right: 15px;
    top: 55%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #F59256;

    @media (min-width: 768px) {
        right: 20px;  
    }
`

