import styled from "styled-components";

export const HomeStyle = styled.div `
    margin: 70px;
    .content {
        display: flex;
        .content {
            width: 50%;
            padding: 10px;
            p {
                font-size: 20px;
                line-height: 2;
            }
        }
        .image {
            width: 50%;
            height: auto;
            padding: 10px;
            img {
                width: 100%;
            }
        }
    }
`;