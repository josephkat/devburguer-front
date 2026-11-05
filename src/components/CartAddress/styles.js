import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
    

    * {
        color : #484848;
        font-weight: 500;
    }

    .container-top {
        display: grid;
        grid-gap: 10px 30%;
        grid-template-areas: 
        'title title'
        'items items-price'
        'delivery-tax delivery-tax-price'
        ;

        .title {
            grid-area: title;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 20px;
            background-color: #484848;
            color: #fff;
            text-align: center;
            border-top-right-radius: 15px;
            border-top-left-radius: 15px;
            height: 56px;
            line-height: 56px;
            width: 100%;
        }

        .items {
            grid-area: items;
        }

        .items-price {
            grid-area: items-price;
        }

        .delivery-tax {
            grid-area: delivery-tax;
        }

        .delivery-tax-price {
            grid-area: delivery-tax-price;
        }
    }

    .container-bottom {
        display: flex;
        justify-content: space-between;
        margin-top: 1.5rem;
        font-size: 20px;
        font-weight: 700;
        padding: 0 20px;

        * {
            font-weight: 700;
        }
    }
`;