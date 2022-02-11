import styled from "styled-components";

export const HeaderDiv = styled.div `
    box-shadow: 0 1px 4px rgba(0, 0, 0, .4);
    background: #fff;
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        li {
            padding: 25px;
            a {
                color: rgba(0, 0, 0, 0.7);
                padding: 10px;
                font-weight: 500;
                font-size: 17px;
                &:hover {
                    color: rgba(0, 0, 0, 1);
                }
            }
        }
    }
`;